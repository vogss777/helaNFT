const webpack = require('webpack');
const path = require('path');
const setToken = require('./setToken');
const TerserPlugin = require('terser-webpack-plugin');
const resolve = (dir) => {
	return path.join(__dirname, dir);
};
module.exports = {
	// 基本路径
	publicPath: '/',

	// 输出文件目录
	outputDir: './dist',

	// 静态资源存放的文件夹(相对于ouputDir)
	assetsDir: 'static',

	// 指定生成的 main.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
	// indexPath: 'main.html',

	// eslint-loader 是否在保存的时候检查
	lintOnSave: true,

	productionSourceMap: false,
	runtimeCompiler: true,

	css: {
		extract: process.env.NODE_ENV === 'production' ? true : false,
		// extract: true,
	},
	configureWebpack: (config) => {
		config.entry.app = ['babel-polyfill', './src/main.js'];
		if (process.env.NODE_ENV === 'production') {
			return {
				plugins: [
					//打包环境去掉console.log
					new TerserPlugin({
						terserOptions: {
							ecma: undefined,
							warnings: false,
							parse: {},
							compress: {
								drop_console: true,
								drop_debugger: false,
								pure_funcs: ['console.log'], // 移除console
							},
						},
					}),
				],
			};
		}
	},
	chainWebpack: (config) => {
		if (process.env.NODE_ENV === 'production') {
			config.optimization.minimize(true);
		}
		config.resolve.alias.set('@', resolve('src')); // key,value自行定义，比如.set('@@', resolve('src/components'))
	},
};
