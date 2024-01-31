const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    mode: 'production',
    output: {
        filename: "main.js",
        publicPath: "/",
    },

    // devServer: {
    //     allowedHosts: "127.0.0.1",
    //     host: "127.0.0.1",
    //     port: 3000,
    //   },
    
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif|ttf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin()
    ],
};