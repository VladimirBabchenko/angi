var ENV = process.env.NODE_ENV || "development";
if (!process.env.NODE_ENV)   process.noDeprecation = true;
var webpack = require("webpack");
var configPath = ENV == "development" ? "webpack.dev": "webpack.prod";
var webpackConfig = require("../config/" + configPath + ".js");

function run() {
    return webpack(webpackConfig, function(data) {

    })
}

run();