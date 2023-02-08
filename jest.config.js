'use strict'

process.env.TZ = 'UTC'

module.exports = {
  preset: 'jest-expo',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '^@(.*)/(.*)$': '<rootDir>/node_modules/@$1/$2',
    '^core/(.*)$': '<rootDir>/src/core/$1',
    '^ui/(.*)$': '<rootDir>/src/ui/$1',
    // Warning: You called act(async () => ...) without await: https://github.com/callstack/react-native-testing-library/issues/379#issuecomment-1131836137
    '^asap$': '<rootDir>/src/core/__tests__/asap.js',
    '^asap/raw$': '<rootDir>/src/core/__tests__/asap.js'
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
