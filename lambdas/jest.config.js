export default {
  collectCoverageFrom: ["./src/**/*.{ts}"],
  moduleNameMapper: {
    "@/(.*)": ["<rootDir>/src/$1"],
  },
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{ts,tsx}',
    '!**/node_modules/**',
  ],
};
