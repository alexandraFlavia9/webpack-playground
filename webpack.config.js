const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env) =>  ({
    mode: env.mode,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader'}
        ]
    },
    plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
})