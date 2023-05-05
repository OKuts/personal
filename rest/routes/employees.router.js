import {Router} from 'express'
import {auth} from '../middlewares/auth.js'
import {EmployeesController} from '../controllers/employees.controller.js'

const router = new Router()
const controller = new EmployeesController()

router.get('/', auth, (req, res) => controller.getAllEmployees(req, res))
router.get('/:id', auth, (req, res) => controller.getEmployee(req, res))
router.post('/add', auth, (req, res) => controller.addEmployee(req, res))
router.post('/remove/:id', auth, (req, res) => controller.removeEmployee(req, res))
router.put('/edit/:id', auth, (req, res) => controller.editEmployee(req, res))

export default router
