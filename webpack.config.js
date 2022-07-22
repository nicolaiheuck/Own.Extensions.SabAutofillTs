const path = require("path")
module.exports = {
    mode: "production",
    entry: {
        popup: './src/popup/index.ts'
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
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js"
    }
}