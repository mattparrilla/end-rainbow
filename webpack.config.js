module.exports = {
    context: __dirname + "/app",
    entry: './app.jsx',
    output: {
        path: __dirname + "/dist",
        publicPath: 'dist',
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            }, {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
