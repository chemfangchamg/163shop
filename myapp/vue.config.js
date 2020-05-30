const path  = require("path");
module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    open: true, // 自动打开浏览器
    host: 'localhost',
    port: 9527,
    compress: true, // 启动gzip压缩资源
    hot: true, // 启动HMR功能
  },
  css: {
    loaderOptions: {
      postcss: {
        // 这里的选项会传递给 postcss-loader
        plugins: [
          require('postcss-px2rem')({
            remUnit: 100, // 1rem等于多少px
          })
        ]
      }
    }
  },

}