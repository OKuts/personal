import {UsersService} from '../services/users.service.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class UsersController {
    constructor() {
        this.service = new UsersService()
    }
    async loginUser (req, res) {
        const {email, password} = req.body
        if (!email || !password) {
            return res.status(400).json({message: 'Uncorrected data'})
        }

        const user = await this.service.getUser(email)

        const isPasswordCorrect = user && (await bcrypt.compare(password, user.password))
        if (user && isPasswordCorrect) {
            res.status(200).json({
                id: user.id,
                email: user.email,
                name: user.name,
            })
        } else {
            return res.status(400).json({message: 'Uncorrected login or password'})
        }
    }

    async registerUser (req, res) {
        const {email, password, name} = req.body

        if (!email || !password || !name) {
            return res.status(400).json({message: 'Uncorrected data'})
        }

        const registeredUser = await this.service.getUser(email)

        if (registeredUser) {
            return res.status(400).json({message: `User with email: ${email} already exist`})
        }

        const user = await this.service.registerUser(email, password, name)

        const secret = process.env.JWT_SECRET

        if (user && secret) {
            res.status(200).json({
                id: user.id,
                email: user.email,
                name,
                token: jwt.sign({id: user.id}, secret, {expiresIn: '30d'})
            })
        } else {
            return res.status(400).json({message: 'Failed to create user'})
        }
    }

    currentUser (req, res) {
        res.send(JSON.stringify(req.user))
    }
}
