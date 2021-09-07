const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',
    devtool: 'source-map', // 크롬에서 디버깅 가능하도록
    entry: {
        index: "./src/index.js",
    },
    output: {
        // 현재 절대 경로, public 하위 경로
        path: path.resolve(__dirname, "public/javascripts"),
        filename: "[name]_bundle.js"
    },
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            exclude: /node_modules/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }, {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: '../index.html',
            chunks: ['index']
        }),
        new MiniCssExtractPlugin(),
    ],
}