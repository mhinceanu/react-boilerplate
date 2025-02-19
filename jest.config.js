module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/index.js',
    '!src/setupTests.js',
    '!src/testsHelper.js'
  ],
  coverageReporters: ['lcov', 'html'],
  coverageDirectory: 'coverage',
  transform: { '^.+\\.jsx?$': 'babel-jest' },
  moduleNameMapper: { '\\.(css|scss)$': 'jest-css-modules' },
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['src/store', 'src/api']
};
