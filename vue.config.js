module.exports = {
  publicPath: '/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /.mdx?$/,
          use: ['babel-loader', '@mdx-js/vue-loader']
        }
      ]
    }
  }
}
