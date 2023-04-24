import { Application } from 'express'

import { CountPeopleUseCase } from './count'

export const prefix = '/v1/person'

export function routes(http: Application): void {
  http.get(`${prefix}/count`, CountPeopleUseCase.init().executeHttp)
}
