/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/react-internal.js", "@repo/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    extends: "@repo/typescript-config/react-library.json",
    compilerOptions: {
      outDir: "dist"
    },
    include: ["src", "turbo", "./index.ts"],
    exclude: ["node_modules", "dist"]
  },
};
