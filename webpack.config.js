
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

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
                {test: /\.jpe?g$/, use: [{loader: 'url-loader', options: { limit: 5000} }]}
            ]
        },
        plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
    }, 
    modeConfig(env.mode))
}