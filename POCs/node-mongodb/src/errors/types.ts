export enum ErrorCode {
  'UNKNOWN_ERROR',
  'VALIDATION_ERROR',
  'PERMISSION_ERROR',
  'RESOURCE_NOT_FOUND',
  'RESOURCE_CONFLICTED',
}

export type ErrorMessage = {
  code: ErrorCode
  message: string
  details?: string
}
