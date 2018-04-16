#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable global-require */
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const router = require('./routes');
const app = new (require('express'))();
const webpackConfig = require('../webpack.config.js');

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
    const webpackDevMiddleware = require('webpack-dev-middleware'); // eslint-disable-line import/no-extraneous-dependencies
    const webpackConfigObject = webpackConfig(null, { mode: 'development' });
    const compiler = webpack(webpackConfigObject);
    app.use(
        webpackDevMiddleware(compiler, {
            noInfo: true,
            publicPath: webpackConfigObject.output.publicPath,
        }),
    );
}

app.use('/static', express.static(path.resolve(`${__dirname}/../dist`)));
app.use(express.static(path.resolve(`${__dirname}/../public`)));
app.use(bodyParser.json());

// Client route
app.get('/', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/../client/index.html`));
});

// API routes
app.use('/api', router);

app.listen(port, error => {
    if (error) {
        console.error(error);
    } else {
        console.info(
            '==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.',
            port,
            port,
        );
    }
});
