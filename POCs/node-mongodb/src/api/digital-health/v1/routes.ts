import express from 'express'

import { routes as consultRoutes } from './use-cases/consult/routes'
import { routes as personRoutes } from './use-cases/person/routes'

export function routes(http: express.Application): void {
  consultRoutes(http)
  personRoutes(http)
}
