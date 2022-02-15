/*
 * @Author: Bin
 * @Date: 2022-02-16
 * @FilePath: /react-admin/webpack.mix.js
 */
let mix = require('laravel-mix');

// index 页面
mix.ts('src/pages/index/index.tsx', 'static/js/index.js')
	.react()
	.sass('src/pages/index/scss/index.scss', 'static/css/index.css');