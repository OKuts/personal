import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export class EmployeesService {
    async getAllEmployees(){
        try {
            const employees = prisma.employee.findMany()

        } catch {

        }


    }

}
