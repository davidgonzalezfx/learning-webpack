const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpaclPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	entry: {
		home: path.resolve(__dirname, 'src/js/index.js')
	},
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'
	},
	devServer: {
		hot: true,
		open: true,
		port: 3000
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 900000,
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpaclPlugin({
			title: 'Webpack-dev-server + hot-module',
			template: path.resolve(__dirname, 'index.html')
		})
	]
}
