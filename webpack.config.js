const path = require('path');
const webpack = require('webpack');

const config = {
    entry: ['./client/js/index'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: __dirname,
                query: {
                    cacheDirectory: true
                }
            },
            {
                test: /\.svg$/,
                loader: 'raw-loader'
            }
        ]
    },
    watch: true
};

const prod = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
});

config.plugins.push(prod);

module.exports = config;
