var nodeResolve = require("rollup-plugin-node-resolve"); // 包安装失败无法测试
var common = require("./rollup.js");

module.exports = {
  input: "src/index.js",
  output: {
    file: "dist/index.aio.js",
    format: "umd",
    name: "clone",
    banner: common.banner,
  },
  plugins: [
    nodeResolve({
      main: true,
      extensions: [".js"],
    }),
    common.getCompiler(),
  ],
};
