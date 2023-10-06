import { Application } from 'express'

import { CountConsultsUseCase } from './use-cases/count-consults'
import { CountUniquePatientsUseCase } from './use-cases/count-unique-patients'

export function routes(http: Application): void {
  http.get(`/consult/count`, CountConsultsUseCase.init().executeHttp)
  http.get(`/consult/unique-patients-count`, CountUniquePatientsUseCase.init().executeHttp)
}
