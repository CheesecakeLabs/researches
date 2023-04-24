import { z } from 'zod'

import { createResponseSchema } from 'api/core/framework/types'

export const CountPeopleResponse = createResponseSchema(
  z.object({
    count: z.number(),
  })
)

export type CountPeopleResponse = z.infer<typeof CountPeopleResponse>
