import { z } from 'zod'

type ResponseSchema<T extends z.ZodTypeAny> = z.ZodObject<{
  message: z.ZodString
  data: T
}>

export function createResponseSchema<T extends z.ZodTypeAny>(dataSchema: T): ResponseSchema<T> {
  return z.object({
    message: z.string(),
    data: dataSchema,
  })
}

export const BaseResponseSchema = createResponseSchema(z.any())
export type BaseResponseSchema = z.infer<typeof BaseResponseSchema>
