const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    mode: 'development',
    output: {
        filename: "main.js",
        publicPath: "/",
    },
    
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif|ttf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
};