import { HttpStatusCodes } from 'api/core/utils/http/status-code'
import { zodToSchema } from 'api/core/utils/zod'
import { DIGITAL_HEALTH_TAG } from 'api/digital-health/constants'

import { CountPeopleResponse } from './types'

export default {
  get: {
    summary: 'Count people',
    tags: [DIGITAL_HEALTH_TAG],
    responses: {
      [HttpStatusCodes.OK]: {
        type: 'object',
        content: {
          'application/json': {
            schema: zodToSchema(CountPeopleResponse),
          },
        },
      },
    },
  },
}
