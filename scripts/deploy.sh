#!/usr/bin/env bash

set -e

python3 ./scripts/index_generator.py

gh-pages -d build

rm -f ./public/games/index.json
