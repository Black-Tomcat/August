const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./front/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'front/dist'),
        filename: "bundle.js",
    },
    devtool: "source-map",
    mode: "development",
    devServer: {
        proxy: { // proxy URLs to backend development server
            '/api': 'http://localhost:3000'
        },
        hot: false, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true // only errors & warns on hot reload
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        // presets: ['@babel/preset-env']
                        // plugins: ['@babel/plugin-transform-runtime']
                        presets: ['es2015', 'react', 'stage-0'],
                        plugins: ['transform-decorators-legacy', 'transform-class-properties']
                    }
                },
                exclude: /node_modules/
            }, {
                test: /\.(png|jpg|jpeg)?$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: './resources/[name].[ext]'
                    }
                }
            }, {
                test: /\.sass$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }, {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: './resources/[name].[ext]'
                    }
                }
            }, {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            }, {
                test: /\.json$/,
                use: {
                    loader: "json-loader"
                }
            }
        ],
    },
    target: 'electron-main',
    node: {
        fs: 'empty'
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./front/index.html",
            filename: "./index.html",
            chunks: ["index"]
        })
    ],
    watch: false,
    watchOptions: {
        aggregateTimeout: 1000,
        poll: 1000,
        ignored: /node_modules/
    }
};
