import { Schema, model } from 'mongoose'

export interface IPerson {
  name: string
}

const personSchema = new Schema<IPerson>({
  name: { type: String, required: true },
})

export const Person = model<IPerson>('Person', personSchema)
