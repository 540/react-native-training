'use strict'

process.env.TZ = 'UTC'

module.exports = {
  preset: 'jest-expo',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '^_di/(.*)$': '<rootDir>/src/_di/$1',
    '^core/(.*)$': '<rootDir>/src/core/$1',
    '^ui/(.*)$': '<rootDir>/src/ui/$1'
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@gorhom/bottom-sheet|toggle-switch-react-native|@sentry/.*|sentry-expo)'
  ],
  cacheDirectory: '.jest/cache',
  resetMocks: true,
  testRegex: '\\.spec|.ispec\\.(ts|tsx)$',
  setupFilesAfterEnv: ['./setupJest.ts', '@testing-library/jest-native/extend-expect'],
  reporters: ['default', 'github-actions']
}
