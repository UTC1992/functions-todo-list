import { Router } from 'express'
import authController from '../controllers/auth.controller'

const authRouter = Router()

// Ruta para login de usuario
authRouter.post('/login', authController.login)

export default authRouter
