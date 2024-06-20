import superTest from 'supertest'

import { Consult } from 'api/core/entities/consult'
import { Patient } from 'api/core/entities/patient'
import { messages } from 'api/digital-health/constants'
import server from 'app'

import { Doctor } from '../../../core/entities/doctor'

describe('Get consult count', () => {
  function makeRequest(): superTest.Test {
    return superTest(server.http).get(`/consult/count`).send()
  }

  it('can get consult count when there is no consult', async () => {
    const response = await makeRequest()
    expect(response.statusCode).toBe(200)
    expect(response.body.message).toBe(messages.CONSULTS_COUNT_SUCCESS)
    expect(response.body.data.count).toBe(0)
  })

  it('can get consult count when there is a consult', async () => {
    const doctor = await new Doctor({ name: 'wow', registration_number: 'wow' }).save()
    const patient = await new Patient({ name: 'wow', specific_field: 'wow' }).save()
    await new Consult({ doctor: doctor.id as string, patient: patient.id as string }).save()
    const response = await makeRequest()
    expect(response.statusCode).toBe(200)
    expect(response.body.message).toBe(messages.CONSULTS_COUNT_SUCCESS)
    expect(response.body.data.count).toBe(1)
  })
})
