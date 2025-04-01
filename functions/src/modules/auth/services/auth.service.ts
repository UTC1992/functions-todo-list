import jwt from 'jsonwebtoken'

class AuthService {
  private readonly secretKey: string

  constructor(secretKey: string) {
    this.secretKey = secretKey
  }

  // Método para generar un token
  public generateToken(payload: { email: string }): string {
    return jwt.sign(payload, this.secretKey, { expiresIn: '1h' })
  }
}

export default AuthService
