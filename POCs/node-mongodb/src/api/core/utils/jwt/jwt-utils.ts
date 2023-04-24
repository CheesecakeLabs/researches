export abstract class JwtUtils {
  abstract sign(object: object, key: string, options: object): string
  abstract verify(token: string, key: string): unknown
}
