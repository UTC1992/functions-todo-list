import { Request, Response } from 'express'
import UserService from '../services/user.service'

class UserController {
  private readonly userService: UserService

  constructor(userService: UserService) {
    this.userService = userService
  }

  // Controller method to handle user creation
  public async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.body

      // Check if the user already exists
      const userExists = await this.userService.userExists(email)
      if (userExists) {
        throw new Error('User already exists')
      }

      // Create a new user if they do not exist
      await this.userService.createUser({ email })
      res.status(201).json({ message: 'User created successfully' })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  }
}

const userService = new UserService()
const userController = new UserController(userService)

export default userController
