import { DiscriminatorOptions, Schema } from 'mongoose'

import { IPerson, Person } from '../person'

export interface IDoctor extends IPerson {
  registration_number: string
}

const options = { discriminatorKey: 'type' } as DiscriminatorOptions

const PatientSchema = new Schema<IDoctor>({
  registration_number: { type: String, required: true },
})

export const Doctor = Person.discriminator<IDoctor>('Doctor', PatientSchema, options)
