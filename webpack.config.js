
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

const modeConfig = mode => require(`./build-utils/webpack.${mode}`);

module.exports = (env) =>  {
    return merge({
        mode: env.mode,
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                { test: /\.css$/, use: ["style-loader", 'css-loader']}
            ]
        },
        plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
    }, 
    modeConfig(env.mode))
}