module.exports = {
  browser: true,
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/', './dist/',
  ],
  globals: {
    window: true,
  },
  coverageDirectory: './coverage/',
  collectCoverage: true,
};
