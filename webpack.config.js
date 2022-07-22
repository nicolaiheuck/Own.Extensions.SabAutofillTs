const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    mode: "production",
    entry: {
        popup: './src/ts/popup.ts'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ["ts-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: "./src/views/*.html",
                    to: "views/[name].html"
                },
                {
                    from: "./public/*.*",
                    to: "[name][ext]"
                }
            ]
        })
    ],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "js/[name].js"
    }
}