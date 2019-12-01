const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.(css|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/public/index.html')
        })
    ],
    devServer: {
        port: 2000
    }
};