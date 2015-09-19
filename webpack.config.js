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
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
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
