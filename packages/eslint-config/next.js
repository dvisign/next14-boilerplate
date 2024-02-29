/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    require.resolve("@vercel/style-guide/eslint/next"),
    "./library",
  ],
  globals: {
    React: "writable",
    JSX: "writable",
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ["only-warn"],
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
  ],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
};
