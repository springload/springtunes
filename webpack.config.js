const path = require('path');
const webpack = require('webpack');

const config = {
    entry: [
        './client/js/index',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            include: __dirname,
            query: {
                // https://github.com/babel/babel-loader#options
                cacheDirectory: true,
                presets: ['react', 'es2015', 'stage-2'],
            },
        },
            {
                test: /\.svg$/,
                loader: 'raw-loader',
            },
        ],
    },
    watch: true,
};

const prod = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
});

config.plugins.push(prod);

module.exports = config;
