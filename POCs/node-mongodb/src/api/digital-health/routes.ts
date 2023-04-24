import { Application } from 'express'

import { routes as v1Routes } from './v1/routes'

export function routes(http: Application): void {
  v1Routes(http)
}
