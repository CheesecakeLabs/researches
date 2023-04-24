import { DiscriminatorOptions, Schema } from 'mongoose'

import { IPerson, Person } from '../person'

export interface IPatient extends IPerson {
  specific_field: string
}

const options = { discriminatorKey: 'type' } as DiscriminatorOptions

const PatientSchema = new Schema<IPatient>({
  specific_field: { type: String, required: true },
})

export const Patient = Person.discriminator<IPatient>('Patient', PatientSchema, options)
