import React, { useState } from "react";
import { v4 as makeUUID } from "uuid";
import Editor from "./Editor";

const makeBlankQuestion = () => ({
  id: makeUUID().toUpperCase(),
  label: "",
  answers: {
    display: "",
    accepts: [],
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

let EditorController = ({}) => {
  const [game, updateGame] = useState(makeBlankGame());
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [invalid, updateInvalid] = useState({});

  const makeDeepCopyOfGame = () => JSON.parse(JSON.stringify(game));

  const validateGame = () => {
    let updatedInvalid = {};

    updateInvalid(updatedInvalid);
  };

  /**
   * @param {string} fieldName the name of the field to be updated.
   */
  const onFieldChange = (fieldName) => {
    return (event) => {
      /** @type string | array | null */
      let value = event?.target?.value ?? null;
      if (value === null) {
        throw `Received null value for update of '${fieldName}'.`;
      }

      let updatedGame = makeDeepCopyOfGame();
      if (["id", "title", "headline", "time"].includes(fieldName)) {
        // FIXME this fails when you blank the field.
        if (fieldName === "time") value = parseInt(value);

        updatedGame[fieldName] = value;
      } else if (fieldName.includes("image")) {
        // +2 to account for the extra dot after the image
        fieldName = fieldName.substring(fieldName.lastIndexOf(".") + 1);

        if (["src", "alt"].includes(fieldName)) {
          updatedGame.image[fieldName] = value;
        } else {
          throw `Bad image field '${fieldName}' for attempted update.`;
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
        } else if (fieldName === "answers.accept") {
          updatedGame.questions[idx].answers.accept = value;
        } else {
          throw `Bad question field '${fieldName}' for attempted update.`;
        }
      } else {
        throw `Bad field name '${fieldName}' for attempted update.`;
      }

      console.log(game, updatedGame);
      updateGame(updatedGame);

      if (wasSubmitted) {
        validateGame();
      }
    };
  };

  const onAddQuestion = () => {
    let updatedGame = makeDeepCopyOfGame();
    updatedGame.questions.push(makeBlankQuestion());
    updateGame(updatedGame);
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
          throw `Invlid direction to move question: '${direction}'`;
      }

      let updatedGame = makeDeepCopyOfGame();

      let placeholder = updatedGame.questions[destIdx];
      updatedGame.questions[destIdx] = updatedGame.questions[idx];
      updatedGame.questions[idx] = placeholder;

      updateGame(updatedGame);
    };
  };

  const onDeleteQuestion = (idx) => {
    return () => {
      let updatedGame = makeDeepCopyOfGame();
      updatedGame.questions.splice(idx, 1);
      updateGame(updatedGame);
    };
  };

  const onSubmit = () => {
    setWasSubmitted(true);
    if (!validateGame()) {
      return;
    }

    const out = JSON.stringify(game, "id", 2);

    const anchor = document.createElement("a");
    anchor.setAttribute(
      "href",
      "data:application/json;charset=utf-8," + encodeURIComponent(out)
    );
    anchor.setAttribute("download", `${game.id}.json`);

    document.appendChild(anchor);
    anchor.click();
    document.removeChild(anchor);
  };

  return (
    <Editor
      game={game}
      invalid={invalid}
      updateField={onFieldChange}
      onSubmit={onSubmit}
      addQuestion={onAddQuestion}
      deleteQuestion={onDeleteQuestion}
      moveQuestion={onMoveQuestion}
    />
  );
};

export default EditorController;
