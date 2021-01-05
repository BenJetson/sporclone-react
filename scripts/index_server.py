#!/usr/bin/env python3

from index_generator import make_index_json

from watchdog.observers import Observer
from watchdog.events import PatternMatchingEventHandler

from flask import Flask, json

from rwmutex import RWLock

lock = RWLock()
index = ""


def update_index(event=None):
    global index
    global lock

    print("updating index!")

    with lock.write:
        index = make_index_json()


update_index()

watchdog_event_handler = PatternMatchingEventHandler(
    patterns="*.json", ignore_patterns="", ignore_directories="", case_sensitive=True,
)

watchdog_event_handler.on_any_event = update_index

watchdog_observer = Observer()
watchdog_observer.schedule(
    event_handler=watchdog_event_handler, path="./public/games", recursive=False
)

watchdog_observer.start()

api = Flask(__name__)


@api.route("/sporclone-react/games/index.json", methods=["GET"])
def get_index():
    with lock.read:
        return index


api.run()

