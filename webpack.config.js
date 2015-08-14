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
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    },
	resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
