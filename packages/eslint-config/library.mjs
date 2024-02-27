import { resolve } from "node:path"

const project = resolve(process.cwd(), "tsconfig.json")

export default {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "next",
    "next/core-web-vitals",
    "prettier",
  ],
  plugins: ["react", "prettier", "autofix", "react-hooks", "@typescript-eslint"],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project,
      },
    },
  },
  ignorePatterns: ["**/.*.js", "**/.*.ts", "**/.*.tsx", "node_modules/", "dist/"],
  overrides: [
    {
      files: ["*.js?(x)", "*.ts?(x)"],
    },
  ],
}
