import { z } from 'zod'

import { createResponseSchema } from 'api/core/framework/types'

export const CountConsultsResponse = createResponseSchema(
  z.object({
    count: z.number(),
  })
)

export type CountConsultsResponse = z.infer<typeof CountConsultsResponse>
