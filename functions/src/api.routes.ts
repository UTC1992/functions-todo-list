import { Router } from 'express'
import authRouter from './modules/auth/routes/auth.routes'
import userRouter from './modules/users/routes/user.routes'
import taskRouter from './modules/tasks/routes/task.routes'

const apiRouter = Router()

apiRouter.get('/', (_, res) => {
  res.send('Bienvenido a la API.')
})
apiRouter.use('/auth', authRouter)
apiRouter.use('/users', userRouter)
apiRouter.use('/tasks', taskRouter)

export default apiRouter
