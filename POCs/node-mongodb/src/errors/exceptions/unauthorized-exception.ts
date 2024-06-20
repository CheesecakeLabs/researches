import { HttpStatusCodes } from 'api/core/utils/http/status-code'

import { BusinessException } from './business-exception'
import { ErrorCode } from '../types'

export class UnauthorizedException extends BusinessException {
  constructor(details: string) {
    super(ErrorCode.PERMISSION_ERROR, HttpStatusCodes.UNAUTHORIZED, details)
  }
}
