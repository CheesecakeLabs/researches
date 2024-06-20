// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageReporters: ['json', 'html', 'text-summary'],
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/src/config/'],
  setupFilesAfterEnv: ['./config/setup-tests.ts'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  moduleDirectories: ['node_modules', 'src'],
  rootDir: './',
}
