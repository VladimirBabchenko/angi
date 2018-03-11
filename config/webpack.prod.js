var config = require("./main");
var webpack = require("webpack");
var webpackConfig = require("./webpack");
var UglifyJSPlugin = require("uglifyjs-webpack-plugin");
var merge = require("webpack-merge");

module.exports = merge(webpackConfig, {
    entry: {
        app: config.src + "/app.js"
    },

    plugins: [
        new UglifyJSPlugin()
    ],

    output: {
        path: config.dist,
        filename: "[name].bundle.js",
        library: "[name]"
    }
});