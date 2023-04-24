#!/bin/bash
set -e

if [[ $NODE_ENV = "development" ]] ; then
  make clean-setup-dev
  make migrate-run ENV=development
  make start-dev
else
  make build
  make migrate-run ENV=production
  make start
fi
