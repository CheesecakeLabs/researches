import { Request, Response } from 'express'

import { Person } from 'api/core/entities/person'
import { UseCaseBase } from 'api/core/framework/use-case'
import { IUseCaseHttp } from 'api/core/framework/use-case/http'
import { HttpStatusCodes } from 'api/core/utils/http/status-code'

import { CountPeopleResponse } from './types'
import { messages } from '../constants'

export class CountPeopleUseCase extends UseCaseBase implements IUseCaseHttp<CountPeopleResponse> {
  executeHttp = async (
    _request: Request,
    response: Response<CountPeopleResponse>
  ): Promise<Response<CountPeopleResponse>> => {
    const result = await this.handle()
    return response.status(HttpStatusCodes.OK).json(result)
  }

  async handle(): Promise<CountPeopleResponse> {
    const response = await Person.count()
    return {
      data: {
        count: response,
      },
      message: messages.PEOPLE_COUNT_SUCCESS,
    }
  }
}
