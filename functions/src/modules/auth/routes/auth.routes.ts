import { Router } from 'express'
import { validateTokenMiddleware } from '../middlewares/validateToken.middleware'
import authController from '../controllers/auth.controller'

const authRouter = Router()

// Ruta para login de usuario
authRouter.post('/login', authController.login)

// Ruta protegida para verificar si el token es válido
authRouter.get('/verify', validateTokenMiddleware, authController.verifyToken)

export default authRouter
