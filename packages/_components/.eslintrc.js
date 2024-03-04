const { resolve } = require("path")

module.exports = {
  root: true,
  extends: ["@repo/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: resolve(__dirname, "tsconfig.json"),
  },
}
