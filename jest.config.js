module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    moduleNameMapper: {
      '^@components(.*)$': '<rootDir>/components$1',
      '^@pages(.*)$': '<rootDir>/pages$1',
      "^labnotes\\/firebase\\/(.*)$": "<rootDir>/src/firebase/$1"
    },

  };
  