import { Router } from 'express'
import userController from '../controllers/user.controller'

const userRouter = Router()

userRouter.post('/', (req, res) => userController.createUser(req, res))

export default userRouter
