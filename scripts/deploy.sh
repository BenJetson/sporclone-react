#!/usr/bin/env bash

python3 ./scripts/index_generator.py

gh-pages -d build

rm -f ./public/games/index.json
