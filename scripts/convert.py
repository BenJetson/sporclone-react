#!/usr/bin/env python3

import pyperclip
import json
import bs4
import lxml

game = {}

print("Enter the original game config file path.")
config_file = input(">>> ")
with open(config_file, "r") as f:
    config = f.readline()

tokens = config.split("*")

# Last token is always the time.
game["time"] = int(tokens[-1])

# Strip the time.
tokens = tokens[:-1]

# Question titles are only here, so we must find them.
print("Enter the original game HTML file path.")
html_file = input(">>> ")
with open(html_file, "r") as f:
    html = f.read()

parsed_html = bs4.BeautifulSoup(html, "lxml")
question_elements = parsed_html.body.findAll("div", class_="answerTitle")
question_titles = []
for element in question_elements:
    question_titles.append(element.text)

game["title"] = parsed_html.head.find("title").text[len("Sporclone: ") :]

game["headline"] = parsed_html.body.find("h2").text

game["image"] = {}

image_element = parsed_html.body.find("img")
game["image"]["src"] = "https://www.bengodfrey.net/sporclone/" + image_element["src"]
game["image"]["alt"] = image_element["alt"]

# DOM is in reverse order vs. key.
tokens.reverse()

game["questions"] = []

for idx, token in enumerate(tokens):
    answer_tokens = token.split(" | ")

    game["questions"].append(
        {
            "label": question_titles[idx],
            "answers": {"display": answer_tokens[0], "accepts": answer_tokens},
        }
    )

pyperclip.copy(json.dumps(game, indent=2))
print("Game JSON is copied to your clipboard.")

