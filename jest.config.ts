import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  coverageReporters: ['text', 'text-summary'],
  collectCoverageFrom: ['./src/components/**/*.tsx', '!**/index.{ts,tsx}'],
  moduleNameMapper: {
    '^@test-utils$': '<rootDir>/src/testUtils.ts',
    '^@constants$': '<rootDir>/src/constants.ts'
  }
};

export default config;
