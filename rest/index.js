import usersRouter from './routes/users.router.js'

export const applyRoutes = (app) => {
    app.use('/api/users', usersRouter)
}
