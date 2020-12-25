import React, { useState } from "react";
import PropTypes from "prop-types";
import Game from "./Game";

export let makeInitialQuestionStatus = (questions) => {
  let questionStatus = [];
  for (let q of questions) {
    questionStatus.push({
      label: q.label,
      answer: q.answers.display,
      isCorrect: false,
    });
  }
  return questionStatus;
};

let GameController = ({ template }) => {
  const [questionStatus, setQuestionStatus] = useState(
    makeInitialQuestionStatus(template.questions)
  );
  const timeLeft = 78;
  const wasStarted = true;
  const gameOver = wasStarted && timeLeft < 1;
  const otherGames = [];

  return (
    <Game
      headline={template.headline}
      image={template?.image ?? null}
      questionStatus={questionStatus}
      otherGames={otherGames}
      wasStarted={wasStarted}
      gameOver={gameOver}
      timeLeft={timeLeft}
    />
  );
};

export default GameController;
