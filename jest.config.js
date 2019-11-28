module.exports = {
  verbose: true,
  setupFiles: ['./enzyme.config.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/config/**',
    '!*.config.(js|json)',
    '!src/**/*.(test|spec).(js|jsx)',
    '!**/unit-tests/**',
    '!**/dist/**',
    '!**/src/Index.(js|jsx)',
  ],
  coveragePathIgnorePatterns: ['/node_modules'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  coverageDirectory: '<rootDir>/dashboard/unit-tests/',
  displayName: { name: 'BoilerPlate', color: 'red' },
};
