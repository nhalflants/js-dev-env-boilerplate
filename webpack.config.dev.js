const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

process.env.NODE_ENV = 'development'

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'cheap-module-source-map',
  entry: [ './src/index.js' ],
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    }, {
      test: /(\.css)$/,
      use: ["style-loader", "css-loader"]
    }]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    publicPath: '/',
    stats: 'minimal',
  }
}
