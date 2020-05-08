const path = require("path");

module.exports = {
	mode: "production",
	entry: "./src/index.ts",
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
				test: /\.tsx?/,
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
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js']
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
