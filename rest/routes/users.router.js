import {Router} from 'express'

const router = new Router()

router.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})

export default router
