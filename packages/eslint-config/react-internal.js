const { resolve } = require("node")

const project = resolve(process.cwd(), "tsconfig.json")

module.exports = {
  extends: ["eslint:recommended", "eslint-config-turbo", "prettier"],
  plugins: ["only-warn"],
  globals: {
    React: "writable",
    JSX: "writable",
  },
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    "import/resolver": {
      typescript: { project },
    },
  },
  ignorePatterns: ["**/.*.js", "**/.*.ts", "**/.*.tsx", "**/*.json", "node_modules/"],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
}
