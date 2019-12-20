/*
 * @Descripttion:
 * @version:
 * @Author: chenArno
 * @Date: 2019-12-12 14:53:30
 * @LastEditors  : chenArno
 * @LastEditTime : 2019-12-20 16:18:27
 */
const path = require('path')
const theme = require('./getTheme')()
const webpack = require('webpack')

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
    index: './src/index.tsx',
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
    extensions: ['.js', '.jsx', '.json', 'ts', 'tsx']
  },
  // 源错误检查
  devtool: 'cheap-module-eval-source-map',
  // WebPack 警告WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).解决
  performance: {
    hints: 'warning', // 枚举
    maxAssetSize: 30000000, // 整数类型（以字节为单位）
    maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
    assetFilter: function(assetFilename) {
      // 提供资源文件名的断言函数
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require(`./${process.env.NODE_ENV}.env`)
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(ts|tsx)$/,
        use: ['babel-loader', 'ts-loader'],
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
          {
            loader: 'less-loader',
            // 自定义主题
            options: {
              sourceMap: true,
              modifyVars: theme,
              javascriptEnabled: true
            }
          }
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
