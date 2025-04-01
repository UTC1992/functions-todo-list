import jwt, { JwtPayload } from 'jsonwebtoken'

class AuthService {
  private readonly secretKey: string

  constructor(secretKey: string) {
    this.secretKey = secretKey
  }

  // Método para generar un token
  public generateToken(payload: object): string {
    return jwt.sign(payload, this.secretKey, { expiresIn: '1h' })
  }

  // Método para verificar un token
  public verifyToken(token: string): string | JwtPayload | null {
    try {
      return jwt.verify(token, this.secretKey)
    } catch (error) {
      return null
    }
  }
}

export default AuthService
