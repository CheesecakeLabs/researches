import superTest from 'supertest'

import { Patient } from 'api/core/entities/patient'
import server from 'app'

import { Doctor } from '../../../../../core/entities/doctor'
import { messages } from '../constants'
import { prefix } from '../routes'

describe('Get people count', () => {
  function makeRequest(): superTest.Test {
    return superTest(server.http).get(`${prefix}/count`).send()
  }

  it('can get people count when there is no person', async () => {
    const response = await makeRequest()
    expect(response.statusCode).toBe(200)
    expect(response.body.message).toBe(messages.PEOPLE_COUNT_SUCCESS)
    expect(response.body.data.count).toBe(0)
  })

  it('can get people count when there is a doctor', async () => {
    await new Doctor({ name: 'wow', registration_number: 'wow' }).save()
    const response = await makeRequest()
    expect(response.statusCode).toBe(200)
    expect(response.body.message).toBe(messages.PEOPLE_COUNT_SUCCESS)
    expect(response.body.data.count).toBe(1)
  })

  it('can get people count when there is a patient', async () => {
    await new Patient({ name: 'wow', specific_field: 'wow' }).save()
    const response = await makeRequest()
    expect(response.statusCode).toBe(200)
    expect(response.body.message).toBe(messages.PEOPLE_COUNT_SUCCESS)
    expect(response.body.data.count).toBe(1)
  })

  it('can get people count when there is a patient and a doctor', async () => {
    await new Patient({ name: 'wow', specific_field: 'wow' }).save()
    await new Doctor({ name: 'wow', registration_number: 'wow' }).save()
    const response = await makeRequest()
    expect(response.statusCode).toBe(200)
    expect(response.body.message).toBe(messages.PEOPLE_COUNT_SUCCESS)
    expect(response.body.data.count).toBe(2)
  })
})
