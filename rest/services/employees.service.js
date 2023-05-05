import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export class EmployeesService {
    async getAll() {
        return prisma.employee.findMany()
    }

    async getOne(id) {
        return prisma.employee.findUnique({where: {id}})
    }

    async addEmployee(data, userId) {
        return prisma.employee.create({data: {...data, userId}})
    }

    async removeEmployee(id) {
        return prisma.employee.delete({where: {id}})
    }

    async editEmployee(id, data) {
        return prisma.employee.update({where: {id}, data})
    }

    async getEmployee(id) {
        return prisma.employee.findUnique({where: {id}})
    }
}
