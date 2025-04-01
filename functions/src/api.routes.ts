import { Router } from 'express'
import authRouter from './modules/auth/routes/auth.routes'
import userRouter from './modules/users/routes/user.routes'

const apiRouter = Router()

apiRouter.get('/', (_, res) => {
  res.send('Bienvenido a la API.')
})
apiRouter.use('/auth', authRouter)
apiRouter.use('/users', userRouter)

export default apiRouter
