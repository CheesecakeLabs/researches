import mongoose from 'mongoose'

beforeEach(async () => {
  const collections = await mongoose.connection.collections
  for (const collection of Object.values(collections)) {
    await collection.deleteMany({})
  }
})

afterAll(async () => {
  for (const connection of mongoose.connections) {
    await connection.close()
  }
})

jest.setTimeout(10000)
process.env.DEBUG = 'false'
