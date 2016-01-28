#!/usr/bin/env node
/* eslint-disable no-console */
const path = require('path');
const globalRootPath = path.join(__dirname, '..');
const port = process.env.PORT || 3000;
const exec = require('child_process').exec;

exec(`cd ${globalRootPath}`, () => {
    console.info('==> 🌎  Server is starting on port %s.', port);
    console.info('This process should take a few minutes... Depending on your configuration...');
    console.info('After a few minutes, open up http://localhost:%s/ in your browser', port);
    exec('npm run start');
});
