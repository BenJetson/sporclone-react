import React, { useState } from "react";
import { v4 as makeUUID } from "uuid";
import { format } from "prettier/standalone";
import parserBabel from "prettier/parser-babel";
import Editor from "./Editor";

const makeBlankQuestion = () => ({
  id: makeUUID().toUpperCase(),
  label: "",
  answers: {
    display: "",
    accept: [],
  },
});

const makeBlankGame = () => ({
  id: "",
  time: 0,
  title: "",
  headline: "",
  image: {
    src: "",
    alt: "",
  },
  questions: [makeBlankQuestion()],
});

const makeGameEditable = (gameIdx, template, allGames) => {
  if (!template) {
    return null;
  }

  let id = allGames?.[gameIdx]?.id ?? null;
  if (!id) {
    return null;
  }

  let game = JSON.parse(JSON.stringify(template));

  game.id = id;

  for (let i = 0; i < game.questions.length; i++) {
    game.questions[i].id = makeUUID().toUpperCase();
  }

  return game;
};

let EditorController = ({ gameIdx, template, allGames }) => {
  const [game, updateGame] = useState(
    makeGameEditable(gameIdx, template, allGames) ?? makeBlankGame()
  );
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [invalid, updateInvalid] = useState({});

  const makeDeepCopyOfGame = () => JSON.parse(JSON.stringify(game));

  const validateGame = ({ g = game, force = false }) => {
    if (!wasSubmitted && !force) {
      return;
    }

    let updatedInvalid = {};

    for (let field of ["id", "title", "headline"]) {
      if (g[field].length < 1) {
        updatedInvalid[field] = "This field cannot be blank.";
      }
    }

    if (g.image.src.length > 0 || g.image.alt.length > 0) {
      for (let field of ["src", "alt"]) {
        if (g.image[field].length < 1) {
          updatedInvalid[`image.${field}`] =
            "If one image field has a value, both must be filled.";
        }
      }
    }

    if (g.time < 15) {
      updatedInvalid["time"] = "Time cannot be less than fifteen seconds.";
    }

    if (g.questions.length < 3) {
      updatedInvalid["questions"] = "Must have a minumum of three questions.";
    }

    for (let i = 0; i < g.questions.length; i++) {
      const fieldPrefix = `questions[${i}]`;

      if (g.questions[i].label.length < 1) {
        updatedInvalid[`${fieldPrefix}.label`] = "This field cannot be blank.";
      }

      if (g.questions[i].answers.display.length < 1) {
        updatedInvalid[`${fieldPrefix}.answers.display`] =
          "This field cannot be blank.";
      }

      if (g.questions[i].answers.accepts.length < 1) {
        updatedInvalid[`${fieldPrefix}.answers.accepts`] =
          "Must have at least one accepted answer.";
      }
    }

    updateInvalid(updatedInvalid);
    return Object.keys(updatedInvalid).length === 0;
  };

  /**
   * @param {string} fieldName the name of the field to be updated.
   */
  const onFieldChange = (fieldName) => {
    return (event) => {
      /** @type string | array | null */
      let value = event?.target?.value ?? null;
      if (value === null) {
        throw new Error(`Received null value for update of '${fieldName}'.`);
      }

      let updatedGame = makeDeepCopyOfGame();
      if (["id", "title", "headline", "time"].includes(fieldName)) {
        if (fieldName === "time") value = value !== "" ? parseInt(value) : 0;

        updatedGame[fieldName] = value;
      } else if (fieldName.includes("image")) {
        // +2 to account for the extra dot after the image
        fieldName = fieldName.substring(fieldName.lastIndexOf(".") + 1);

        if (["src", "alt"].includes(fieldName)) {
          updatedGame.image[fieldName] = value;
        } else {
          throw new Error(
            `Bad image field '${fieldName}' for attempted update.`
          );
        }
      } else if (fieldName.includes("questions")) {
        const idx = parseInt(
          fieldName.substring(
            fieldName.lastIndexOf("[") + 1,
            fieldName.lastIndexOf("]")
          )
        );

        // +2 to account for the extra dot after the ]
        fieldName = fieldName.substring(fieldName.lastIndexOf("]") + 2);
        console.log(fieldName, !fieldName.includes("."));

        if (!fieldName.includes(".")) {
          updatedGame.questions[idx][fieldName] = value;
        } else if (fieldName === "answers.display") {
          updatedGame.questions[idx].answers.display = value;
        } else if (fieldName === "answers.accepts") {
          updatedGame.questions[idx].answers.accepts = value;
        } else {
          throw new Error(
            `Bad question field '${fieldName}' for attempted update.`
          );
        }
      } else {
        throw new Error(`Bad field name '${fieldName}' for attempted update.`);
      }

      console.log(game, updatedGame);
      updateGame(updatedGame);
      validateGame({ g: updatedGame });
    };
  };

  const onAddQuestion = () => {
    let updatedGame = makeDeepCopyOfGame();
    updatedGame.questions.push(makeBlankQuestion());
    updateGame(updatedGame);
    validateGame({ g: updatedGame });
  };

  const onMoveQuestion = (idx, direction) => {
    return () => {
      let destIdx;
      switch (direction) {
        case "up":
          destIdx = idx - 1;
          break;
        case "down":
          destIdx = idx + 1;
          break;
        default:
          throw new Error(`Invlid direction to move question: '${direction}'`);
      }

      let updatedGame = makeDeepCopyOfGame();

      let placeholder = updatedGame.questions[destIdx];
      updatedGame.questions[destIdx] = updatedGame.questions[idx];
      updatedGame.questions[idx] = placeholder;

      updateGame(updatedGame);
      validateGame({ g: updatedGame });
    };
  };

  const onDeleteQuestion = (idx) => {
    return () => {
      let updatedGame = makeDeepCopyOfGame();
      updatedGame.questions.splice(idx, 1);
      updateGame(updatedGame);
      validateGame({ g: updatedGame });
    };
  };

  const onSubmit = () => {
    setWasSubmitted(true);
    if (!validateGame({ force: true })) {
      // Scroll to the top of the page to show the error banner.
      window.scrollTo(0, 0);

      return;
    }

    let gameToDownload = makeDeepCopyOfGame();
    delete gameToDownload.id;
    for (let i = 0; i < gameToDownload.questions.length; i++) {
      delete gameToDownload.questions[i].id;
    }
    if (gameToDownload.image.src.length < 1) {
      delete gameToDownload.image;
    }

    const out = format(JSON.stringify(gameToDownload), {"parser": "json", "plugins": [parserBabel]});

    const anchor = document.createElement("a");
    anchor.setAttribute(
      "href",
      "data:application/json;charset=utf-8," + encodeURIComponent(out)
    );
    anchor.setAttribute("download", `${game.id}.json`);

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <Editor
      game={game}
      invalid={invalid}
      wasSubmitted={wasSubmitted}
      updateField={onFieldChange}
      onSubmit={onSubmit}
      addQuestion={onAddQuestion}
      deleteQuestion={onDeleteQuestion}
      moveQuestion={onMoveQuestion}
    />
  );
};

export default EditorController;
