import { Router } from 'express'
import { validateTokenMiddleware } from '../middlewares/validateToken.middleware'
import AuthController from '../controllers/auth.controller'

const authController = new AuthController()

const authRouter = Router()

// Ruta para login de usuario
authRouter.post('/login', authController.login)

// Ruta protegida para verificar si el token es válido
authRouter.get('/verify', validateTokenMiddleware, authController.verifyToken)

export default authRouter
