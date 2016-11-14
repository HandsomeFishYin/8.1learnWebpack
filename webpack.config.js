/**
 * Created by HelenYin on 2016/8/1.
 */
var path = require("path");
var webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: ['webpack/hot/dev-server',
        path.resolve(__dirname, './src/main.js'),
        path.resolve(__dirname, './src/style.scss')
    ],
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin .extract("style", "css!sass?sourceMap")
        },
        {
            test: /\.css$/,
            loader: 'style!css'
        }]
    },
    plugins: [
        new ExtractTextPlugin('[name].css',{allChunks: true})
    ]
};