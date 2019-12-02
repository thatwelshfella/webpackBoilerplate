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
    '!**/src/index.(js|jsx)',
    '!**/tests/**',
    '!**/assets/**',
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
  displayName: { name: 'boilerplate', color: 'red' },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/fileMock.js',
    '\\.(css|less)$': '<rootDir>/tests/styleMock.js',
  },
  snapshotSerializers: ['<rootDir>/node_modules/enzyme-to-json/serializer'],
};
