![Logo Springtunes](/screenshots/logo_springtunes.png?raw=true "Logo Springtunes")

# [ ![Codeship Status for springload/springtunes](https://codeship.com/projects/4be56cd0-a6df-0133-dffd-1a5a40261798/status?branch=master)](https://codeship.com/projects/130070) [![npm version](https://badge.fury.io/js/springtunes.svg)](https://badge.fury.io/js/springtunes) [![Dependency Status](https://david-dm.org/springload/springtunes.svg?style=flat-square)](https://david-dm.org/springload/springtunes.svg) [![devDependency Status](https://david-dm.org/springload/springtunes/dev-status.svg?style=flat-square)](https://david-dm.org/springload/springtunes#info=devDependencies)
Control your Spotify client remotely from your browser without having to log in to anything.

Current features:
- Current track/artist/album
- Previous song
- Next song
- Play/Pause
- Mute/Unmute
- Change volume

**If you use Springtunes and like it, please give us a GitHub star ;)**

## Screenshot
![Screenshot Springtunes](/screenshots/sc_springtunes.png?raw=true "Screenshot Springtunes")

## Requirements
- Spotify client needs to run on the machine hosting the server
- Only compatible with MacOS X 10.10 or later
- [NodeJS v6 (LTS)](https://nodejs.org/en/) installed.

## Getting started

Make sure you use NodeJS v6+. (type `node -v` to check it)

```sh
npm install -g springtunes
springtunes
```

If you want to change the server port you can use `PORT=XXXX springtunes`

By default, you should be able to access Springtunes on the host machine using [http://localhost:3000/](http://localhost:3000/)

Then, to access it from another computer on your network, use something like http://[IP_ADDRESS_HOST_MACHINE_WITH_SPOTIFY:3000/]

## Contribute

If you want to contribute to this project, please check [this page](./CONTRIBUTING.md).
