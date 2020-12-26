#!/usr/bin/env python3

import pyperclip
import json

game = {}

game["time"] = 90

print("Who is the Artist (make it possessive)?")
artist = input(">>> ")

print("What is the Album Title?")
title = input(">>> ")

game["title"] = f"{title} Album"
game["headline"] = f'Name all the song titles from {artist} album: "{title}".'

game["image"] = {}

print("Enter a URL to the album art.")
game["image"]["src"] = input(">>> ")
game["image"]["alt"] = f"{title} Album Art"

print("Enter track titles, one per line.")
print("When finished, leave the line blank and press RETURN.")

tracks = []
while True:
    track = input(f"#{len(tracks)+1} >>> ")
    if len(track) == 0:
        break

    tracks.append(track)

game["questions"] = []
for idx, track in enumerate(tracks):
    game["questions"].append(
        {
            "label": f"Track {idx+1}",
            "answers": {"display": track, "accepts": [track.lower()],},
        }
    )

pyperclip.copy(json.dumps(game, indent=2))
print("Game JSON is copied to your clipboard.")
