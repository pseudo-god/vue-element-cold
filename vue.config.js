// 内置路径包
const path = require("path");

// 定义resolve方法，获取绝对路径
function resolve(dir) {
  return path.join(__dirname, dir);
}

let proxy = {
  "/api": {
    //要访问的跨域的域名
    target: process.env.VUE_APP_BASE_DOMAIN,
    ws: true,
    secure: false, // 使用的是http协议则设置为false，https协议则设置为true
    changOrigin: true,
    pathRewrite: {
      "^/api": "",
    },
  },
};
module.exports = {
  lintOnSave: process.env.NODE_ENV === "development",
  // 一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例
  devServer: {
    proxy,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: ` @import "@//style/variable.scss";`,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
        "#": resolve("src/components"),
      },
    },
    // resolveLoader: {
    //   // 因为 html-loader 是开源 npm 包，所以这里要添加 'node_modules' 目录
    //   // modules: [path.join(__dirname, "./src/loaders"), "node_modules"],
    // },
  },
  // 允许对内部的 webpack 配置进行更细粒度的修改
  chainWebpack: (config) => {
    // 配置svg默认规则排除icons目录中svg文件处理
    config.module.rule("svg").exclude.add(resolve("src/icons")).end();

    // 新增icons规则，设置svg-sprite-loader处理icons目录中svg文件
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ symbolId: "icon-[name]" })
      .end()
  }
};
