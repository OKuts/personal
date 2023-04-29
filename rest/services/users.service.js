import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import bcrypt from 'bcrypt'

export class UsersService {
    async getUser(email){
        return prisma.user.findFirst({where: {email}})
    }

    async getUserById(id){
        return prisma.user.findUnique({where: {id}})
    }
    async registerUser(email, password, name){
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        return await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword
            }
        })
    }

    current(){
        return 'current'
    }
}
