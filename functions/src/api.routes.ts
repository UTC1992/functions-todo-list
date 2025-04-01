import { Router } from 'express'
import authRouter from './modules/auth/routes/auth.routes'

const apiRouter = Router()

apiRouter.get('/', (_, res) => {
  res.send('Bienvenido a la API.')
})
apiRouter.use('/auth', authRouter)

export default apiRouter
