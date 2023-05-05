import usersRouter from './routes/users.router.js'
import employeesRouter from './routes/employees.router.js'

export const applyRoutes = (app) => {
    app.use('/api/users', usersRouter)
    app.use('/api/employee', employeesRouter)
}
