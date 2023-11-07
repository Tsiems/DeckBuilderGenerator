const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const babelOptions = {
    "presets": ["@babel/preset-env"]
};

function isNodeModule(module) {
    return module.context && module.context.indexOf("node_modules") !== -1;
}

const entries = {
    index: "./src/index.ts",
};

module.exports = {
    mode: 'development',
    entry: entries,
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "built"),
        // publicPath: "built/",
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: babelOptions
                    },
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true // IMPORTANT! use transpileOnly mode to speed-up compilation
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: babelOptions
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "resources/",
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|otf|woff)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "resources/",
                        },
                    },
                ],
            },
            {
                test: /\.hbs$/,
                use: {
                    loader: "handlebars-loader",
                    options: {
                        helperDirs: [ __dirname + "/src/handlebars-helpers" ],
                        inlineRequires: "\/images\/",
                    },
                },
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            },
            {
                test: /\.txt$/,
                use: [
                    {
                        loader: "raw-loader"
                    }
                ]
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "markdown-loader",
                        options: {
                            /* your options here */
                        }
                    }
                ]
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            //handlebars: "handlebars/dist/handlebars.min.js" // allows handlebars to work without the need for "fs"
        },
        alias: {
            "~": path.resolve(__dirname, "src/"),
            "src": path.resolve(__dirname, "src/"),
        },
        fallback: {
            "path": require.resolve("path-browserify"),
            "stream": require.resolve("stream-browserify"),
            "buffer": require.resolve("buffer")
        }
    },
    // node: {
    //     fs: false
    // },
    plugins: [
        // generate for us our index.html page
        new HtmlWebpackPlugin({
            title: "Loading Deck Builder Generator...",
        }),
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new webpack.ProvidePlugin({
            PIXI: 'pixi.js'
        })
    ],
    devtool: "source-map",
    watchOptions: { 
        aggregateTimeout: 300, 
        poll: 1000 
    },
    devServer: {
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    // provides a great speedup in both module use and development debugging
    optimization: {
        splitChunks: {
          cacheGroups: {
            node_vendors: {
              test: /[\\/]node_modules[\\/]/,
              name: 'node_modules',
              chunks: 'all',
            },
          },
        },
      }
}
