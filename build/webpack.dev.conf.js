const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./config');

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    port: 2018,
    index: 'index.html',
    // router的history模式时使用
    historyApiFallback: {
      index: baseConfig.urlPrefix
    },
    publicPath: baseConfig.urlPrefix
    // proxy: {
    //     '/onepath/*': {
    //         target: 'http://0.0.0.0:2018/',
    //         pathRewrite: {'^/onepath': ''},
    //     },
    //     '/pathtwo/*': {
    //         target: 'http://0.0.0.0:2018/',
    //         changeOrigin: true,
    //         secure: false
    //     }
    // }
  },
  plugins: [
    new MiniCssExtractPlugin({
      path: path.join(__dirname, '../dist'),
      filename: 'static/css/[name]-[hash].css'
    })
  ]
});

module.exports = webpackConfig;
