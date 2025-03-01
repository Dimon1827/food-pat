module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    './src/components/layout/header/*.{js,jsx,ts,tsx}',
    '!src/react-app-end.d.ts',
  ],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
  },
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgrMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/filesMock.js',
  },
  testMatch: ['**/?(*.)(spec|test).[jt]s?(x)'],
  testEnvironment: 'jsdom',
};
