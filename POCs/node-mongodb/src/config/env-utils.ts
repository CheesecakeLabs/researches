export const envTypes = {
  DEV: 'development',
  TEST: 'test',
}

export function isDevEnv(): boolean {
  return process.env.NODE_ENV === envTypes.DEV
}

export function isTestEnv(): boolean {
  return process.env.NODE_ENV === envTypes.TEST
}
