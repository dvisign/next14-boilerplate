const { resolve } = require("node:path")

const project = resolve(process.cwd(), "tsconfig.json")

module.exports = {
  extends: ["eslint:recommended", "prettier", "eslint-config-turbo"],
  plugins: ["only-warn"],
  globals: {
    React: "writable",
    JSX: "writable",
  },
  env: {
    browser: true,
  },
  settings: {
    "import/resolver": {
      typescript: { project },
    },
  },
  ignorePatterns: ["**/.*.js", "**/.*.ts", "**/.*.tsx", "node_modules/", "dist/"],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
}
