const { nextLintConfig } = require("ibj/cjs")
const { resolve } = require("path")

module.exports = {
  ...nextLintConfig, // nextLintConfig 객체의 모든 속성을 여기에 펼쳐 넣음
  parser: "@typescript-eslint/parser", // 추가적인 설정이 필요한 경우 이곳에 작성
  parserOptions: {
    ...nextLintConfig.parserOptions, // nextLintConfig의 parserOptions를 가져와서 필요한 부분을 추가하거나 수정
    project: resolve(__dirname, "./tsconfig.json"), // 프로젝트의 tsconfig.json 위치를 정확히 지정
  },
  env: {
    node: true, // Node.js 환경 활성화
    es2021: true, // ES2021 문법 지원 활성화
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: resolve(__dirname, "tsconfig.json"),
      },
    },
  },
}
