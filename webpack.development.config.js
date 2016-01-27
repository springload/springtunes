const webpack = require('webpack');
const config = require('./webpack.config.js');

config.devtool = 'cheap-module-eval-source-map';
config.entry.push('webpack-hot-middleware/client');
config.plugins.push(new webpack.HotModuleReplacementPlugin());

const prod = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
});

config.plugins.push(prod);

module.exports = config;
