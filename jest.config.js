module.exports = {
  preset: "jest-preset-angular",
  globalSetup: "jest-preset-angular/global-setup",
  modulePathIgnorePatterns: ["<rootDir>/lambdas/"],
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {}],
    "^.+\\.ts?$": ["ts-jest", {}],
  },
};
