module.exports = {
    context: __dirname + "/app",
    entry: {
        app: "./app.jsx"
    },
    output: {
        path: __dirname + "/static",
        publicPath: 'static',
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'] 
    },
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
