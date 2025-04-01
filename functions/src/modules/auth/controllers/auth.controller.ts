import { Request, Response } from 'express'
import UserService from '../../users/services/user.service'
import AuthService from '../services/auth.service'

class AuthController {
  private readonly authService: AuthService
  private readonly userService: UserService

  constructor(authService: AuthService, userService: UserService) {
    this.authService = authService
    this.userService = userService
    this.login = this.login.bind(this)
  }

  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.body

      // Verify if the user exists
      const userExists = await this.userService.userExists(email)
      if (!userExists) {
        throw new Error('User not found')
      }

      // Generate token if user exists
      const token = this.authService.generateToken({ email })
      res.status(200).json({ message: 'Login successful', token })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  }
}

const userService = new UserService()
const authService = new AuthService(process.env.SECRET_KEY ?? '')
const authController = new AuthController(authService, userService)

export default authController
