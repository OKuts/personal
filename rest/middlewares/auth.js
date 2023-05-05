import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]
        const {id} = jwt.verify(token, process.env.JWT_SECRET)
        const user = await prisma.user.findUnique({where: {id}})
        req.user = user
        next()
    } catch (e) {
        return res.status(401).json({message: 'unauthorized'})
    }
}
