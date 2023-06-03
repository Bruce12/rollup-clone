var pkg = require("../package.json");
var babel = require("rollup-plugin-babel");

var version = pkg.version;

var banner = `/*!
  * ${pkg.name} ${version}
  * Licensed under MIT
*/
`;
// 主要用来兼容 ESM 2015 代码，使用 babel 进行转换
function getCompiler(opt) {
  return babel({
    babelrc: false, // 不需要 babel 配置文件
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            browsers:
              "last 2 versions, > 1%, ie >= 8, Chrome >= 45, safari >= 10",
            node: "0.12",
          },
          modules: false,
          loose: true, // 松散模式
        },
      ],
    ],
    plugins: [
      [
        "@babel/plugin-transform-runtime", // 支持使用 es 2015 的 APi，例如：Array.form() 会帮你转换
        {
          corejs: 2,
        },
      ],
    ],
    exclude: "node_modules/**",
    runtimeHelpers: true,
  });
}

exports.banner = banner;
exports.getCompiler = getCompiler;
