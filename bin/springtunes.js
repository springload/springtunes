#!/usr/bin/env node

var path = require('path');
var globalRootPath = path.join(__dirname, '..');
const port = process.env.PORT || 3000;

var sys = require('util');
var exec = require('child_process').exec;

exec('cd ' + globalRootPath, function () {
    console.info('==> 🌎  Server is starting on port %s.', port);
    console.info('This process should take a few minutes... Depending on your configuration...');
    console.info('After a few minutes, open up http://localhost:%s/ in your browser', port);
    exec('npm run start', function () {});
});
