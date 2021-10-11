const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        index: "./src/entry_point/app.jsx",
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
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env", { targets: { browsers: ["last 2 versions", ">= 5% in KR"] } }],
                            "@babel/react",
                        ],
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
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
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
