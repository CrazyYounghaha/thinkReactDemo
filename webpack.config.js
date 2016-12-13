module.exports = {
		entry: './src/react/index.jsx',
		output: {
				filename: './www/static/js/bundle.js'
		},
		module: {
				loaders: [
						{test: /\.js$/, loader: "babel",query: {presets: ['react','es2015']}},
						{test: /\.jsx$/,loader: 'babel', query: {presets: ['react', 'es2015']}}
						// {test: /\.css$/, loader: "style!css"},
						// {test: /\.(jpg|png|otf)$/, loader: "url?limit=8192"},
						// {test: /\.scss$/, loader: "style!css!sass"}
				]
		}
};