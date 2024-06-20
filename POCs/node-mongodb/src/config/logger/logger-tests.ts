import { logger } from './index'

const methods: Array<keyof typeof logger> = ['info', 'error', 'warn', 'debug', 'fatal']

describe('logger', () => {
  methods.forEach((method) => {
    test(`It must call ${method} method`, () => {
      const spy = jest.spyOn(logger, method)
      logger[method]({ message: 'Test log message' }, 'Test log message')
      expect(spy).toHaveBeenCalledWith({ message: 'Test log message' }, 'Test log message')
      spy.mockRestore()
    })
  })
})
