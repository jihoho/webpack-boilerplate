const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        index: "./src/entry_point/app.js",
    },
    output: {
        // 현재 절대 경로, public 하위 경로
        path: path.resolve(__dirname, "..", "public"),
        filename: "[name]_bundle.js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|jpg|gif)$/i,
                dependency: { not: ["url"] },
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                        name: "images/[name].[ext]?[hash]",
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/entry_point/index.html",
            filename: "./index.html",
            chunks: ["index"],
        }),
        new MiniCssExtractPlugin(),
    ],
};
