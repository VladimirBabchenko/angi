var config = require("./main");
var webpack = require("webpack");
var loaders = require("./loaders");
var plugins = require("./plugins");

module.exports = {
    resolve: {
        extensions: config.extensions
    },

    module: {
        rules: loaders.rules
    },

    plugins: plugins
};