import { Model, Schema, Types, model } from 'mongoose'

import { IDoctor } from '../doctor'
import { IPatient } from '../patient'

export interface IConsultFields {
  doctor: IDoctor
  patient: IPatient
}

interface IConsultStatics extends Model<IConsultFields> {
  getUniquePatientsCount(): Promise<number>
}

const consultSchema = new Schema<IConsultFields, IConsultStatics>({
  doctor: { type: Types.ObjectId, ref: 'Doctor' },
  patient: { type: Types.ObjectId, ref: 'Patient' },
})

consultSchema.static('getUniquePatientsCount', async function myStaticMethod(): Promise<number> {
  /**
   * Todo: Check if (await Consult.distinct('patient')).length is equally performatic
   */
  return (
    (
      await this.aggregate([
        { $group: { _id: null, count: { $addToSet: '$patient' } } },
        { $project: { count: 1 } },
        { $unwind: '$count' },
        { $count: 'count' },
      ])
    )[0]?.count ?? 0
  )
})

export const Consult = model<IConsultFields, IConsultStatics>('Consult', consultSchema)
