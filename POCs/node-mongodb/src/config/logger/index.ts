import pino from 'pino'

const prettyPinoConfig = {
  target: 'pino-pretty',
  options: {
    colorize: true,
    levelFirst: true,
  },
}

type EnvConfigKey = 'development' | 'test' | 'production'

function envConfig(env: EnvConfigKey): object {
  const devConfig = {
    transport: prettyPinoConfig,
  }
  const testConfig = {
    enabled: false,
  }
  const prodConfig = {}

  const config = {
    development: devConfig,
    test: testConfig,
    production: prodConfig,
  }

  return config[env] || config.production
}

const pinoLogger = pino(envConfig(process.env.NODE_ENV?.toString() as EnvConfigKey))

export enum LogTypes {
  Info = 'info',
  Error = 'error',
  Warn = 'warn',
  Debug = 'debug',
  Fatal = 'fatal',
}

export const logger = {
  info: (obj: unknown, msg?: string, ...args: unknown[]): void => pinoLogger.info(obj, msg, ...args),
  error: (obj: unknown, msg?: string, ...args: unknown[]): void => pinoLogger.error(obj, msg, ...args),
  warn: (obj: unknown, msg?: string, ...args: unknown[]): void => pinoLogger.warn(obj, msg, ...args),
  debug: (obj: unknown, msg?: string, ...args: unknown[]): void => pinoLogger.debug(obj, msg, ...args),
  fatal: (obj: unknown, msg?: string, ...args: unknown[]): void => pinoLogger.fatal(obj, msg, ...args),
}
