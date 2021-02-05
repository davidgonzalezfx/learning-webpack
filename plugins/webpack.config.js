const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpaclPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js' 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{loader: MiniCssExtractPlugin.loader}, 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpaclPlugin({
      title: 'PLugins'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
}
