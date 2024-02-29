module.exports = {
  root: true,
  ignorePatterns: ["apps/**", "packages/**"],
  extends: ["@repo/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
}
