import { JwtPayload, sign, verify } from 'jsonwebtoken'

import { JwtUtils } from './jwt-utils'
export class JsonWebToken extends JwtUtils {
  sign(
    object: object,
    key: string = process.env.JWT_PRIVATE_KEY ?? '',
    options: object = { expiresIn: process.env.JWT_EXPIRES_IN }
  ): string {
    return sign(object, key, options)
  }

  verify(token: string, key: string = process.env.JWT_PRIVATE_KEY ?? ''): string | JwtPayload {
    return verify(token, key)
  }
}
