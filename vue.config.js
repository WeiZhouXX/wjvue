const path = require('path')// 引入path模块
function resolve (dir) {
  return path.join(__dirname, dir)// path.join(__dirname)设置绝对路径
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('components', resolve('./src/components'))
      .set('views', resolve('./src/views'))
      .set('assets', resolve('./src/assets'))
      .set('network', resolve('./src/network'))
      .set('common', resolve('./src/common'))
    // set第一个参数：设置的别名，第二个参数：设置的路径
  },
  // 配置跨域
  runtimeCompiler: true,
  publicPath: '/', // 设置打包文件相对路径
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    proxy: {
      '/wj': {
        target: 'http://localhost:8081/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/wj': ''
        }
      }
    }
  }
}
