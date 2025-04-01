import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const secretKey = process.env.JWT_SECRET ?? ''

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers['authorization']
  const token = authHeader?.split(' ')[1]

  if (!token) {
    res.status(401).json({ message: 'No token provided' })
    return
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      res.status(403).json({ message: 'Invalid token' })
      return
    }

    console.log('User authenticated:', user)
    req.body.user = user
    next()
  })
}
