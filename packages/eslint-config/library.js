const { resolve } = require("path")

const project = resolve(process.cwd(), "tsconfig.json")

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "next",
    "prettier",
    "eslint-config-turbo",
  ],
  parserOptions: {
    project,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react", "autofix", "react-hooks", "prettier"],
  globals: {
    React: "writable",
    JSX: "writable",
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
  rules: {
    "next/no-html-link-for-pages": "off",
    "prettier/prettier": ["error"],
    "react/react-in-jsx-scope": "off",
    "spaced-comment": "warn",
    quotes: ["error", "double"],
    "no-console": "warn",
    "no-redeclare": "warn",
    "react/display-name": "off",
    "react/prop-types": "warn",
    "react/jsx-key": "warn",
    "arrow-body-style": "off",
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_|^e$",
        ignoreRestSiblings: true,
        destructuredArrayIgnorePattern: "^_|^e$",
      },
    ],
    "brace-style": [
      "error",
      "stroustrup",
      {
        allowSingleLine: false,
      },
    ],
    indent: ["error", 2, { ignoreComments: true }],
  },
}

    