module.exports = {
    context: __dirname + "/app",
    entry: './app.jsx',
    output: {
        path: __dirname + "/static",
        publicPath: 'static',
        filename: "[name].bundle.js"
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx$/,
                loader: "eslint-loader",
            }
        ],
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    eslint: {
        configFile: '.eslintrc'
    }
};
