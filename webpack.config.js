///webpack.config.js

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let mode = "development"
let target = "web"; // web is default originally

if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist";
}

module.exports = {
    mode: mode,
    target: target,

    output: {
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

    plugins: [new MiniCssExtractPlugin()],

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