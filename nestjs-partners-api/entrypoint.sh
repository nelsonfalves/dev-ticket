#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Install dependencies
npm install &&

# Run migrations
npm run migrate:partner1 &&

# Start fixtures
npm run start partner1-fixture &&

# Start the development servers
npm run start:dev &&

# Wait for background processes to finish
wait