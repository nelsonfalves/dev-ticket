#!/bin/bash

set -e

npm install &&

npm run migrate:partner2 &&
npm run start partner2-fixture &&

npm run migrate:partner1 &&
npm run start partner1-fixture &&

npm run start:dev &

sleep 15

npm run start:dev partner2