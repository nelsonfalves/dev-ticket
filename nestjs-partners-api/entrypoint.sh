#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Install dependencies
npm install &&

# Run migrations
npm run migrate:partner1 &&
npm run migrate:partner2 &&

# Start fixtures
npm run start partner1-fixture &&
npm run start partner2-fixture &&

# Start the development servers
npm run start:dev &

sleep 15

npm run start:dev partner2

# Wait for background processes to finish
wait