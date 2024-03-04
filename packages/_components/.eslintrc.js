const { resolve } = require("path")

module.exports = {
  root: true,
  extends: ["@repo/eslint-config/react-internal.js", "@repo/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: resolve(__dirname, "tsconfig.json"),
  },
};