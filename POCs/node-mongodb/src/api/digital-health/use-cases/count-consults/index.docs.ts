import { HttpStatusCodes } from 'api/core/utils/http/status-code'
import { zodToSchema } from 'api/core/utils/zod'
import { DIGITAL_HEALTH_TAG } from 'api/digital-health/constants'

import { CountConsultsResponse } from './types'

export default {
  get: {
    summary: 'Count consults',
    tags: [DIGITAL_HEALTH_TAG],
    responses: {
      [HttpStatusCodes.OK]: {
        type: 'object',
        content: {
          'application/json': {
            schema: zodToSchema(CountConsultsResponse),
          },
        },
      },
    },
  },
}
