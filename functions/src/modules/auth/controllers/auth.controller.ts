import { Request, Response } from 'express'
import AuthService from '../services/auth.service'

class AuthController {
  private readonly authService: AuthService

  constructor(authService: AuthService) {
    this.authService = authService
  }

  public login(req: Request, res: Response): void {
    const { username } = req.body
    const token = this.authService.generateToken({ username })
    res.json({ message: 'Login successful', token })
  }

  public verifyToken(req: Request, res: Response): void {
    const token = req.headers['authorization']
    if (!token) {
      res.status(401).send('Token not provided')
      return
    }
    const decoded = this.authService.verifyToken(token)
    if (!decoded) {
      res.status(401).send('Invalid token')
      return
    }
    res.json({ message: 'Token is valid', decoded })
  }
}

const authService = new AuthService(process.env.SECRET_KEY ?? '')
const authController = new AuthController(authService)

export default authController
