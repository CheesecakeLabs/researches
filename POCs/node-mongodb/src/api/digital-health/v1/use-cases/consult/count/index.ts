import { Request, Response } from 'express'

import { Consult } from 'api/core/entities/consult'
import { UseCaseBase } from 'api/core/framework/use-case'
import { IUseCaseHttp } from 'api/core/framework/use-case/http'
import { HttpStatusCodes } from 'api/core/utils/http/status-code'

import { CountConsultsResponse } from './types'
import { messages } from '../constants'

export class CountConsultsUseCase extends UseCaseBase implements IUseCaseHttp<CountConsultsResponse> {
  executeHttp = async (
    _request: Request,
    response: Response<CountConsultsResponse>
  ): Promise<Response<CountConsultsResponse>> => {
    const result = await this.handle()
    return response.status(HttpStatusCodes.OK).json(result)
  }

  async handle(): Promise<CountConsultsResponse> {
    const response = await Consult.count()
    return {
      data: {
        count: response,
      },
      message: messages.CONSULTS_COUNT_SUCCESS,
    }
  }
}
