import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
import apiRouter from './api.routes'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', apiRouter)

export default app
