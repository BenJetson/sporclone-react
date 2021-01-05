#!/usr/bin/env python3

import json
import glob
import os


def make_index_json():
    files = glob.glob("./public/games/*.json")
    games = []

    for path in files:
        game = {}

        game["id"] = os.path.splitext(os.path.basename(path))[0]

        with open(path, "r") as f:
            game_data = json.load(f)
            game["name"] = game_data["title"]

        games.append(game)

    games = sorted(games, key=lambda g: g["id"])

    return json.dumps(games, indent=2)


if __name__ == "__main__":
    with open("./build/games/index.json", "w") as f:
        f.write(make_index_json())
