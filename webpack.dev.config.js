const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const path = require('path')

const devWebpackConfig = merge(baseWebpackConfig, {
    devtool: 'source-map',
    output: {
        filename: `js/[name].min.js`,
        path: baseWebpackConfig.externals.paths.dist,
        publicPath: '/',
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
        }),
    ],
})

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
})