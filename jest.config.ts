import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testPathIgnorePatterns: ['<rootDir>/dist/']
}

export default jestConfig