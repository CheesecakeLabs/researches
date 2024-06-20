import { NextFunction, Request, Response } from 'express'

import { BusinessException } from 'errors/exceptions/business-exception'
import { ZodValidationException } from 'errors/exceptions/zod-validation-exception'

export function exceptionMiddleware(err: Error, request: Request, response: Response, _next: NextFunction): Response {
  if (err instanceof ZodValidationException) {
    return response.status(err.statusCode).json(err.payload)
  }
  if (err instanceof BusinessException) {
    return response.status(err.statusCode).json({ message: err.message, details: err.details })
  }

  return response.status(500).json({ status: 'error', message: `internal server error - ${err.message}` })
}
