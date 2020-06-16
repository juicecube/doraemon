module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverage: true,
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  // 不算入覆盖率的文件夹
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/test/',
    '<rootDir>/deps/',
  ],
  collectCoverageFrom: ['src/**/*.ts'],
};
