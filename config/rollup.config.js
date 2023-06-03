var common = require("./rollup.js");

module.exports = {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "cjs", // 输出 commonJs 规范的代码
    banner: common.banner,
  },
  plugins: [common.getCompiler()],
};
