![Logo Springtunes](/screenshots/logo_springtunes.png?raw=true "Logo Springtunes")

# springtunes [ ![Codeship Status for springload/frontend-starter-kit](https://codeship.com/projects/4be56cd0-a6df-0133-dffd-1a5a40261798/status?branch=master)](https://codeship.com/projects/130070)
Spotify remote control through web browser.

![Screenshot Springtunes](/screenshots/sc_springtunes.png?raw=true "Screenshot Springtunes")

## Requirements
- Spotify client needs to run on the machine hosting the server
- Only compatible with MacOS X 10.10 or later

## Installation

> You first need to clone the project on your computer, and to install [Node](https://nodejs.org). This project also uses [nvm](https://github.com/creationix/nvm).

From the command-line:

```sh
cd ~/Development/sites/
git clone git@github.com:springload/springtunes.git
cd frontend-starter-kit
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

## API Documentation

Populated using http://apidocjs.com/

```sh
apidoc -i ./server
```

Visit `index.html` inside `/doc`
