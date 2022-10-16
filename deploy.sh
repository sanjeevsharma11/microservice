#!/bin/bash

set -e

rm -rf node_modules/

yarn

yarn build

pm2 stop ecosystem.config.cjs

pm2 start ecosystem.config.cjs
