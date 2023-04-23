module.exports = {
  preset: "jest-preset-angular",
  globalSetup: "jest-preset-angular/global-setup",
  modulePathIgnorePatterns: ["<rootDir>/pr-flow-demo-submodule/"],
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*.{ts,tsx}", "!**/node_modules/**"],
};
