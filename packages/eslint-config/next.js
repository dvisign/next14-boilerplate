/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [require.resolve("@vercel/style-guide/eslint/next"), "./library"],
  globals: {
    React: "writable",
    JSX: "writable",
  },
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ["only-warn"],
  ignorePatterns: [
    // Ignore dotfiles
    // ".*.js",
    "*.json",
    "node_modules/",
  ],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
}
