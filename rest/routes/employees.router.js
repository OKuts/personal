import {Router} from 'express'
import {auth} from '../middlewares/auth.js'

// const router = new Router()
// const controller = new UsersController()

router.get('/current', auth, (req, res) => controller.currentUser(req, res))
router.post('/login', (req, res) => controller.loginUser(req, res))
router.post('/register', (req, res) => controller.registerUser(req, res))


export default router
