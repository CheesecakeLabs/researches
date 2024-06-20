import { Auth } from 'mongodb'
import mongoose from 'mongoose'

import { isTestEnv } from 'config/env-utils'
import { LogTypes, logger } from 'config/logger'

const databaseConnectionLog = (logType: LogTypes, message: string, err?: unknown): void => {
  if (!isTestEnv()) {
    const mergingObject = { message, err }
    logger[logType](mergingObject, message)
  }
}

const initializeDatabase = async (): Promise<void> => {
  try {
    const connectionOptions = {
      auth: {
        authSource: 'admin',
      } as Auth,
      user: process.env.DATABASE_USER,
      pass: process.env.DATABASE_PASSWORD,
      dbName: isTestEnv() ? 'test' + process.env.JEST_WORKER_ID : process.env.DATABASE_NAME,
      autoCreate: isTestEnv(),
    }

    await mongoose.connect(`mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}`, connectionOptions)
    databaseConnectionLog(LogTypes.Info, 'Initialized database')
  } catch (err) {
    databaseConnectionLog(LogTypes.Error, 'Error initializing database', err)
  }
}

export { initializeDatabase }
