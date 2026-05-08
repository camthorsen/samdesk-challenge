/** @type {import('jest').Config} */
const config = {
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.test.json" }],
  },
  testMatch: ["**/*.test.ts"],
};

module.exports = config;
