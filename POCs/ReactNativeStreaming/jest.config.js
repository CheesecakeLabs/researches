const { defaults: tsjPreset } = require('ts-jest/presets')

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.ts(x)?$': 'ts-jest',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  setupFilesAfterEnv: [
    "<rootDir>/jest/globalMock.js",
    "@testing-library/jest-native/extend-expect"
  ],
  setupFiles: [
    "<rootDir>/jest/setup.js"
  ],
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^styles/(.*)$': '<rootDir>/src/styles/$1',
    '^app/(.*)$': '<rootDir>/src/app/$1',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^i18n/(.*)$': '<rootDir>/src/i18n/$1',
    '^store/(.*)$': '<rootDir>/src/store/$1',
    '^types/(.*)$': '<rootDir>/src/types/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  "transformIgnorePatterns": [
    "node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?|moti?)/)"
  ]
}
