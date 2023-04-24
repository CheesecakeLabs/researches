import { Schema, Types, model } from 'mongoose'

import { IDoctor } from '../doctor'
import { IPatient } from '../patient'

export interface IConsult {
  doctor: IDoctor
  patient: IPatient
}

const consultSchema = new Schema<IConsult>({
  doctor: { type: Types.ObjectId, ref: 'Doctor' },
  patient: { type: Types.ObjectId, ref: 'Patient' },
})

export const Consult = model<IConsult>('Consult', consultSchema)
