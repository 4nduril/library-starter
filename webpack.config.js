const path = require("path");

module.exports = {
	mode: "production",
	entry: "./src/index.js",
	output: {
		filename: "library-starter.js",
		path: path.resolve(__dirname, "dist"),
		library: "libraryStarter",
		libraryTarget: "umd",
		globalObject: "this"
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				include: path.resolve(__dirname, "src"),
				use: [
					{
						loader: "babel-loader",
						options: {
							cacheDirectory: true
						}
					}
				]
			}
		]
	},
	externals: {
		react: {
			root: "React",
			commonjs2: "react",
			commonjs: "react",
			amd: "react"
		}
	}
};
