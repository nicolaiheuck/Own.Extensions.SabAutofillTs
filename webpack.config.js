const path = require("path")
module.exports = {
    mode: "production",
    entry: {
        popup: './src/popup/popup.ts'
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
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    }
}