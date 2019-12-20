/*
 * @Descripttion:
 * @version:
 * @Author: chenArno
 * @Date: 2019-12-12 14:53:30
 * @LastEditors  : chenArno
 * @LastEditTime : 2019-12-20 10:11:06
 */
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const vendors = [
  'antd',
  'react-router-dom'
  // 'axios',
  // 'nprogress',
  // 'react',
  // 'react-dom',
  // 'react-loadable',
  // 'react-redux',
  // 'react-router',
  // 'redux'
]

module.exports = {
  entry: {
    index: './src/index.js',
    // 这部分不变的代码单独打包
    framework: ['react', 'react-dom']
    // vendor: vendors
  },
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    // 设置别名
    alias: {
      '@': resolve('src'), // 这样配置后 @ 可以指向 src 目录
      views: resolve('src/views')
    },
    // 省略后缀名
    extensions: ['.js', '.jsx', '.json']
  },
  // 源错误检查
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'less-loader' }
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
            limit: 8192
          }
        }
      },
      {
        test: /\.(eot|ttf|svg|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'font/'
          }
        }
      }
    ]
  }
}
