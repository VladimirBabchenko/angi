var ExtractTextPlugin = require("extract-text-webpack-plugin");
var plugins = require("./plugins");

module.exports = {
    rules: [
        { test: /\.(ts|tsx)$/, loaders: ["awesome-typescript-loader"] },
        { test: /\.html$|.hbs$/, loaders: ["html-loader"] },
        { test: /\.scss$|\.css$/, 
            use: plugins[1].extract({
            use: [{
                loader: "css-loader", options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader", options: {
                sourceMap: true
                    }
                }],
            })
        },
        { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: "file?name=assets/[name].[hash].[ext]" }
    ]
}