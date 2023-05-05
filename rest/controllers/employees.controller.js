import {EmployeesService} from '../services/employees.service.js'

export class EmployeesController {
    constructor() {
        this.service = new EmployeesService()
    }

    async getAllEmployees (req, res) {
        try {
            const employees = await this.service.getAll()
            res.status(200).json(employees)
        } catch (e) {
            res.status(400).json({message: 'failed to get employees'})
        }
    }

    async getEmployee (req, res) {
        try {
            const {id} = req.params
            const employee = await this.service.getOne(id)
            res.status(200).json(employee)
        } catch (e) {
            res.status(400).json({message: 'failed to get employee'})
        }
    }

    async addEmployee (req, res) {
        try {
            const {firstName, lastName, address, age} = req.body
            if (!firstName || !lastName || !address || !age) {
                res.status(400).json({message: 'all fields are required'})
            }
            const employee = await this.service.addEmployee(req.body, req.user.id)

            res.status(200).json(employee)
        } catch (e) {
            res.status(400).json({message: 'failed to get employees'})
        }
    }

    async removeEmployee (req, res) {
        try {
            const {id} = req.params
            await this.service.removeEmployee(id)
            res.status(200).json({message: 'Ok'})
        } catch (e) {
            res.status(400).json({message: 'failed to delete employee'})
        }
    }

    async editEmployee (req, res) {
        try {
            const {id} = req.params
            await this.service.editEmployee(id, req.body)
            res.status(200).json({message: 'Ok'})
        } catch (e) {
            res.status(400).json({message: 'failed to edit employee'})
        }
    }
}
