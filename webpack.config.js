///webpack.config.js
const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = "development"
let target = "web"; // web is default originally
const plugins = [
    new CleanWebpackPlugin(), // put at top of this array
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
        template: "./src/index.html",
    }),
];


if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist";
}
// else {
//     plugins.push(new ReactRefreshWebpackPlugin());
// };
if (process.env.SERVE) {
    plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
    mode: mode,
    target: target,

    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "dist"), // path.resolve(__dirname, "dist")
        assetModuleFilename: "images/[hash][ext][query]", // organize the asset files in the dist/images
    },

    module: {
        rules: [ {
                test: /\.(png|jpe?g|gif|svg)$/i, // cover most of the images type
                type: "asset", // type: "asset/resource", "asset/inline"
                parser: {
                    dataUrlCondition: {
                        maxSize: 30 * 1024,
                    },
                },
            },
            {
                test: /\.(s[ac]|c)ss$/i, // "test: /\.s?css$/i," ? will support both scss and css
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "" },
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.jsx?$/, // any file end with .js, with the ? this means it may or may not have s
                exclude: /node_modules/, // b/c data transformation is expensive
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    plugins: plugins,

    resolve: {
        extensions: [".js", ".jsx"], // import "./components/App"; support jsx extension 
    },

    // devtool: false,
    devtool: "source-map",

    devServer: {
        // localhost:8080 cannot /GET 
        // In the tutorial it uses contentBase as the key in the devServer object, 
        // a property that appears to have been deprecated in a recent update, so static is used as a replacement.
        // contentBase: "./dist",
        static: "./dist",
        hot: true,

    },
};