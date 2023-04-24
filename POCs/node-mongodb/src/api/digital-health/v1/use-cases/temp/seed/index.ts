import { faker } from '@faker-js/faker'

import { Consult } from 'api/core/entities/consult'
import { Doctor } from 'api/core/entities/doctor'
import { Patient } from 'api/core/entities/patient'
import { BaseResponseSchema } from 'api/core/framework/types'
import { UseCaseBase } from 'api/core/framework/use-case'
import { CliProperty, IUseCaseCli } from 'api/core/framework/use-case/cli'
import { logger } from 'config/logger'

export class TempSeedUseCase extends UseCaseBase implements IUseCaseCli {
  getCliProperties(): CliProperty[] {
    return [{ name: 'type' }]
  }

  async executeCli(request: unknown): Promise<void> {
    const { type } = request as { type: string }
    const response = await this.handle(type)
    logger.info(response)
  }

  async handle(type: string): Promise<BaseResponseSchema> {
    if (type === 'doctor') {
      await new Doctor({
        name: faker.name.firstName(),
        registration_number: faker.random.alphaNumeric(5),
      }).save()
    } else if (type === 'patient') {
      await new Patient({
        name: faker.name.firstName(),
        specific_field: faker.random.alphaNumeric(5),
      }).save()
    } else if (type === 'consult') {
      const doctors = await Doctor.find()
      const patients = await Patient.find()
      await new Consult({
        doctor: faker.helpers.arrayElement(doctors).id as string,
        patient: faker.helpers.arrayElement(patients).id as string,
      }).save()
    }
    return { message: 'Done' }
  }
}
