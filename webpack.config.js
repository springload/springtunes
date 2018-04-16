// Used to run webpack dev server to test the demo in local
const webpack = require('webpack');
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => ({
    mode: options.mode,
    devtool: 'source-map',
    entry: path.resolve(__dirname, './client/js/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                include: __dirname,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.svg$/,
                loader: 'raw-loader',
            },
        ],
    },

    plugins: [
        options.mode === 'development'
            ? new webpack.HotModuleReplacementPlugin()
            : () => {},
    ],
});
