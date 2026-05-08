/** @type {import('jest').Config} */
const config = {
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.test.json" }],
  },
  testMatch: ["**/*.test.ts"],
  moduleNameMapper: {
    "^(.*)\\.js$": "$1",
  },
};

module.exports = config;
