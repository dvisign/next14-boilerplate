module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "next",
    "next/core-web-vitals",
    "./library",
    "prettier",
  ],
  globals: {
    React: "writable",
    JSX: "writable",
  },
  env: {
    node: true,
    browser: true,
  },
}
