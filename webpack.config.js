///webpack.config.js
let mode = "development"

if (process.env.NODE_ENV === "production") {
    mode = "production";
}

module.exports = {
    mode: mode,

    module: {
        rules: [
            {
                test: /\.js$/,  // any file end with .js
                exclude: /node_modules/,  // b/c data transformation is expensive
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },

    // devtool: false,
    devtool: "source-map",

    devServer:{
        // localhost:8080 cannot /GET 
        // In the tutorial it uses contentBase as the key in the devServer object, 
        // a property that appears to have been deprecated in a recent update, so static is used as a replacement.
        // contentBase: "./dist",
        static: "./dist",

    },
};
