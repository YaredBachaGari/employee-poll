module.exports = {
  preset: "jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleNameMapper: {
     '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    "\\.(jpg|jpeg|png|gif|ttf|eot|svg)$": "<rootDir>/src/__mocks__/fileMock.js",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.css$": "jest-transform-stub"
  },
};
