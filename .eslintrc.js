'use strict'

module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'react', 'jest', 'testing-library', 'prettier', 'unused-imports', 'import'],
  settings: {
    react: {
      pragma: 'React',
      version: '17.0.2'
    }
  },
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/react',
    'prettier'
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      impliedStrict: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'react/prop-types': [0],
    'prettier/prettier': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'jest/no-try-expect': 'off',
    'jest/no-conditional-expect': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-redeclare': 'error',
    'testing-library/prefer-screen-queries': 'off', //https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-screen-queries.md
    'testing-library/await-async-query': 'warn',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'jest/no-mocks-import': 'warn',
    'react/display-name': 'off',
    'react/no-did-update-set-state': 'warn',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-curly-brace-presence': ['error', { children: 'ignore' }],
    'no-console': 'error',
    'no-duplicate-imports': 'error',
    'unused-imports/no-unused-imports': 'error',
    'import/no-default-export': 'error',
    'react-native/no-inline-styles': 'error',
    curly: 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'object-shorthand': ['error', 'properties']
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
        'no-unused-vars': 'off' //Causes duplicates with typescript-eslint/no-unused-vars
      }
    }
  ],
  globals: {
    process: true,
    fetchMock: true
  }
}
