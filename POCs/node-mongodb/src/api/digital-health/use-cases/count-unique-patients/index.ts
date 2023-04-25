import { Request, Response } from 'express'

import { Consult } from 'api/core/entities/consult'
import { UseCaseBase } from 'api/core/framework/use-case'
import { IUseCaseHttp } from 'api/core/framework/use-case/http'
import { HttpStatusCodes } from 'api/core/utils/http/status-code'
import { messages } from 'api/digital-health/constants'

import { CountPeopleResponse } from './types'

export class CountUniquePatientsUseCase extends UseCaseBase implements IUseCaseHttp<CountPeopleResponse> {
  executeHttp = async (
    _request: Request,
    response: Response<CountPeopleResponse>
  ): Promise<Response<CountPeopleResponse>> => {
    const result = await this.handle()
    return response.status(HttpStatusCodes.OK).json(result)
  }

  async handle(): Promise<CountPeopleResponse> {
    const count = await Consult.getUniquePatientsCount()
    return {
      data: {
        count,
      },
      message: messages.UNIQUE_PATIENT_COUNT_SUCCESS,
    }
  }
}
