const path = require("path")

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "assets/scss")],
  },
  compiler: {
    emotion: true,
  },
  reactStrictMode: true,
  swcMinify: true,
}
