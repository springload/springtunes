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

## Screenshot
![Screenshot Springtunes](/screenshots/sc_springtunes.png?raw=true "Screenshot Springtunes")

## Requirements
- Spotify client needs to run on the machine hosting the server
- Only compatible with MacOS X 10.10 or later

## Global mode

```sh
npm install -g springtunes
springtunes
```

If you want to change the server port you can use `PORT=XXXX springtunes`

## Installation

> You first need to clone the project on your computer, and to install [Node](https://nodejs.org). This project also uses [nvm](https://github.com/creationix/nvm).

From the command-line:

```sh
cd ~/Development/sites/
git clone git@github.com:springload/springtunes.git
cd springtunes
```

To install our dependencies:

```sh
nvm install
npm install --global eslint eslint-plugin-react babel-eslint eslint-config-airbnb
# Then, install all project dependencies.
npm install
# Optionally, install the git hooks.
./.githooks/deploy
```

## Work on the project

> Everything mentioned in the installation process should already be done.

```sh
# Start the server and the development tools.
npm run dev
# Compile SCSS
npm run build:css
# Runs linting.
npm run lint
```

### Using the git hooks

> Git hooks automatically check your code before every commit.

```sh
# To enable the hooks, from the project root:
./.githooks/deploy
# To disable the hooks for a single commit, use the appropriate flag:
git commit --no-verify
```

## Deploying a new version

### To production

To build:
```sh
npm run dist
npm run build:css
```

To run the server:
```sh
npm run start
```

Once server is running, access to it using: `http://localhost:3000` or `http://[YOUR IP]:3000`

## REST API Documentation

Populated using http://apidocjs.com/

```sh
apidoc -i ./server
```

Visit `index.html` inside `/doc`

## To NPM

- Make your changes on code base
- Once you're sure everything is fine, `npm version patch` (will bump third number, i.e. 0.1.5 -> 0.1.6) or any other more appropriate argument (see https://docs.npmjs.com/cli/version)
- `git push origin master --tags`
- `npm publish`

This will publish the new version to NPM website (https://www.npmjs.com/package/springtunes)
