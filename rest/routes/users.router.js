import {Router} from 'express'
import {UsersController} from '../controllers/users.controller.js'

const router = new Router()
const controller = new UsersController()

router.get('/current', (req, res) => controller.currentUser(req, res))
router.post('/login', (req, res) => controller.loginUser(req, res))
router.post('/register', (req, res) => controller.registerUser(req, res))


export default router
