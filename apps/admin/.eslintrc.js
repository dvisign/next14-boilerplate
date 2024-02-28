/** @type {Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/next"],
  parser: "@typescript-eslint/parser",
  "import/resolver": {
    typescript: {
      alwaysTryTypes: true,
      project: "./tsconfig.json",
    },
  },
}
