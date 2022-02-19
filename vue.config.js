module.exports = {
    /**
     * You will need to set publicPath if you plan to deploy your site under a sub path,
     * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
     * then publicPath should be set to "/bar/".
     * In most cases please use '/' !!!
     * Detail: https://cli.vuejs.org/config/#publicpath
     */
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
      port: 8000,
      open: true,
      overlay: {
        warnings: false,
        errors: true
      },
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
          changeOrigin: true, // 允许跨域
          pathRewrite: {
            '^/api': '' // 请求的时候使用这个api就可以
          }
        }
      }
      // before: require('./mock/mock-server.js')
    }
}