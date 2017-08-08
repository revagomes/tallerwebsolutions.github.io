#!/bin/bash

set -ex

nvm install 7.9.0
nvm use 7.9.0
npm run build
rsync -avzhe "ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no" --exclude '.git' --delete ./.tmp/ taller-docker@67.205.177.225:/mnt/volume-baleia-prod/taller-site/
