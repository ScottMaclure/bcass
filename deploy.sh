#!/bin/bash

# Created to make re-deployment easier.
# Should be run from project directory.

# fast-forward git merge.
git pull --ff

# Remove unused packages.
npm prune

# Install/update packages.
npm install

# Compile and build our static assets etc.
grunt deploy

# Stop + start (not restart) the node app using forever module.
./node_modules/.bin/forever stop app.js
./node_modules/.bin/forever start app.js