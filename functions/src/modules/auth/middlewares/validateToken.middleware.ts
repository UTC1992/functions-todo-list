import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

// Middleware para validar el token
const secretKey = process.env.SECRET_KEY ?? ''

export const validateTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const token = req.headers['authorization']

  if (!token) {
    res.status(401).send('Token not provided')
    return
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      res.status(401).send('Invalid token')
      return
    }

    next()
  })
}
