import { Request, Response } from 'api/core/routes'

import { BaseResponseSchema } from '../types'

import { IUseCaseBase } from '.'

export interface IUseCaseHttp<UseCaseResponse extends BaseResponseSchema = BaseResponseSchema>
  extends IUseCaseBase<BaseResponseSchema> {
  executeHttp(request: Request, response: Response<UseCaseResponse>): Promise<Response<UseCaseResponse>>
}
