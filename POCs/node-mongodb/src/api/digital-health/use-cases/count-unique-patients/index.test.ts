import superTest from 'supertest'

import { Consult } from 'api/core/entities/consult'
import { Patient } from 'api/core/entities/patient'
import { messages } from 'api/digital-health/constants'
import server from 'app'

import { Doctor } from '../../../core/entities/doctor'

describe('Get unique patients count', () => {
  function makeRequest(): superTest.Test {
    return superTest(server.http).get(`/consult/unique-patients-count`).send()
  }

  it('can get unique patients count when there is no consult', async () => {
    const response = await makeRequest()
    expect(response.statusCode).toBe(200)
    expect(response.body.message).toBe(messages.UNIQUE_PATIENT_COUNT_SUCCESS)
    expect(response.body.data.count).toBe(0)
  })

  it('can get unique patients count when there is a consult', async () => {
    const patient = await new Patient({ name: 'wow', specific_field: 'wow' }).save()
    const doctor = await new Doctor({ name: 'wow', registration_number: 'wow' }).save()
    await new Consult({ patient: patient.id as number, doctor: doctor.id as number }).save()
    const response = await makeRequest()
    expect(response.statusCode).toBe(200)
    expect(response.body.message).toBe(messages.UNIQUE_PATIENT_COUNT_SUCCESS)
    expect(response.body.data.count).toBe(1)
  })

  it('can get people count when there is two consults from different patients', async () => {
    const patient2 = await new Patient({ name: 'wow', specific_field: 'wow' }).save()
    const patient = await new Patient({ name: 'wow', specific_field: 'wow' }).save()
    const doctor = await new Doctor({ name: 'wow', registration_number: 'wow' }).save()
    await new Consult({ patient: patient.id as number, doctor: doctor.id as number }).save()
    await new Consult({ patient: patient2.id as number, doctor: doctor.id as number }).save()

    const response = await makeRequest()
    expect(response.statusCode).toBe(200)
    expect(response.body.message).toBe(messages.UNIQUE_PATIENT_COUNT_SUCCESS)
    expect(response.body.data.count).toBe(2)
  })

  it('can get people count when there is two consults from same patient', async () => {
    const patient = await new Patient({ name: 'wow', specific_field: 'wow' }).save()
    const doctor = await new Doctor({ name: 'wow', registration_number: 'wow' }).save()
    await new Consult({ patient: patient.id as number, doctor: doctor.id as number }).save()
    await new Consult({ patient: patient.id as number, doctor: doctor.id as number }).save()
    const response = await makeRequest()
    expect(response.statusCode).toBe(200)
    expect(response.body.message).toBe(messages.UNIQUE_PATIENT_COUNT_SUCCESS)
    expect(response.body.data.count).toBe(1)
  })
})
