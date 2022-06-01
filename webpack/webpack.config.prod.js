const merge = require('webpack-merge');
const common = require('./webpack.config');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = merge(common, {
    mode: "production",
    devtool: false,
    plugins: [
        new CleanWebpackPlugin(),
        new ImageminPlugin({ 
            test: /\.(jpe?g|png|gif|svg)$/i,
            pngquant: {
                quality: '95-100'
            }
        })
    ]
});