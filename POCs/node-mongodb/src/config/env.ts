import path from 'path'

import { default as dotenv } from 'dotenv-safe'

import { envTypes } from 'config/env-utils'
import { logger } from 'config/logger'

const ENV: string = process.env.NODE_ENV || envTypes.DEV || envTypes.TEST

if ([envTypes.DEV, envTypes.TEST].includes(process.env.NODE_ENV ?? '')) {
  dotenv.config({
    path: path.join(__dirname, `../config/.env.${ENV}`),
    sample: path.join(__dirname, '../config/.env.example'),
  })
}

logger.info(`Loaded => environment: ${process.env.NODE_ENV}`)
