// import { ZodValidationException } from 'api/core/errors/exceptions'
import { ZodError, ZodType, z } from 'zod'

import { ZodValidationException } from 'errors/exceptions/zod-validation-exception'

import { BaseResponseSchema } from '../types'

export interface IUseCaseBase<Response extends BaseResponseSchema = BaseResponseSchema> {
  handle(...params: unknown[]): Promise<Response>
}

export abstract class UseCaseBase<UseCaseResponse extends BaseResponseSchema = BaseResponseSchema>
  implements IUseCaseBase
{
  abstract handle(...params: unknown[]): Promise<UseCaseResponse>

  protected validate(payload: unknown, schema: ZodType): z.infer<typeof schema> {
    const request: { success: boolean; error?: ZodError; data?: typeof payload } = schema.safeParse(payload)
    if (!request.success && request.error instanceof ZodError) {
      throw new ZodValidationException(request.error)
    }
    return request.data as z.infer<typeof schema>
  }

  static init<T = UseCaseBase>(this: { new (): T }): T {
    return new this()
  }
}
