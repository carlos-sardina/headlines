import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  coverageReporters: ['text', 'text-summary'],
  collectCoverageFrom: ['./src/components/**/*.tsx', '!**/index.{ts,tsx}'],
  moduleNameMapper: {
    '^@test-utils$': '<rootDir>/src/testUtils.ts',
    '^@constants$': '<rootDir>/src/constants.ts',
    '^@utils$': '<rootDir>/src/utils/index.ts',
    '^@services$': '<rootDir>/src/services/index.ts'
  }
};

export default config;
