// babel.config.js
const plugins = [];

if (process.env.NODE_ENV !== "production") {
    plugins.push("react-refresh/babel"); // if in the production build-dev, then use this plugin
}

module.exports = {
    presets: [
        "@babel/preset-env", ["@babel/preset-react", { runtime: "automatic" }] // "@babel/preset-react"
    ],
    plugins: plugins,
};