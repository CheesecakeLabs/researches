import { Application } from 'express'

import { CountConsultsUseCase } from './count'

export const prefix = '/v1/consult'

export function routes(http: Application): void {
  http.get(`${prefix}/count`, CountConsultsUseCase.init().executeHttp)
}
