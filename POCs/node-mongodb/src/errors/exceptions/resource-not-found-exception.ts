import { BusinessException } from './business-exception'
import { ErrorCode } from '../types'

export class ResourceNotFoundException extends BusinessException {
  constructor(details: string) {
    super(ErrorCode.RESOURCE_NOT_FOUND, 404, details)
  }
}
