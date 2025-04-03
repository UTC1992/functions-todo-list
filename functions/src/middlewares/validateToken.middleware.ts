import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { env } from '../config/env'

const secretKey = env.JWT_SECRET.value()

export const validateToken = (
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

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      res.status(403).json({ message: 'Invalid token', error: secretKey })
      return
    }

    req.user = decoded
    next()
  })
}
