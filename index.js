import 'dotenv/config'
import express from 'express'
import http from 'http'
import cors from 'cors'
import bodyParser from 'body-parser'
import {applyRoutes} from './rest/index.js'

async function bootstrap() {
    const app = express()
    app.use(bodyParser.json())
    app.use(cors())

    const httpServer = http.createServer(app)

    applyRoutes(app)

    await new Promise(resolve => httpServer.listen(process.env.PORT, resolve))

    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}/`)
}

bootstrap().catch(err => console.log(err))
