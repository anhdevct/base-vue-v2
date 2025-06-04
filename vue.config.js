const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8080,
    open: true,
    historyApiFallback: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src')
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
          BASE_URL: JSON.stringify(process.env.BASE_URL || '/'),
          VUE_APP_API_BASE_URL: JSON.stringify(process.env.VUE_APP_API_BASE_URL || 'http://localhost:3000/api')
        }
      })
    ]
  },
  publicPath: '/'
}) 