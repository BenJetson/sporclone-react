import React, { useState } from "react";
import PropTypes from "prop-types";
import Game from "./Game";

export let makeInitialQuestionStatus = (questions) => {
  let questionStatus = [];
  for (let q of questions) {
    questionStatus.push({
      label: q.label,
      answer: q.answers.display,
      accepts: q.answers.accepts,
      isCorrect: false,
    });
  }
  return questionStatus;
};

let selectOtherGames = (gameList) => {
  return []; // FIXME
};

let GameController = ({ template }) => {
  const [questionStatus, setQuestionStatus] = useState(
    makeInitialQuestionStatus(template.questions)
  );
  const [timeLeft, setTimeLeft] = useState(template.time);
  const [wasStarted, setWasStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [otherGames] = useState(selectOtherGames([])); // FIXME
  const [score, setScore] = useState(0);

  let submitGuess = (guess) => {
    if (!wasStarted || gameOver) return false;

    for (const [idx, q] of questionStatus.entries()) {
      if (q.isCorrect) continue;

      for (const answer of q.accepts) {
        if (guess.toLowerCase() === answer.toLowerCase()) {
          // Make a deep copy of the status to respect immutability.
          let updatedQuestionStatus = JSON.parse(
            JSON.stringify(questionStatus)
          );
          updatedQuestionStatus[idx].isCorrect = true;
          setQuestionStatus(updatedQuestionStatus);

          let updatedScore = score + 1;
          setScore(updatedScore);

          if (updatedScore === questionStatus.length) {
            setGameOver(true);
            // FIXME stop timer?
          }

          return true;
        }
      }
    }

    console.log("no match");
    return false;
  };

  let handleButton = () => {
    if (!wasStarted) {
      setWasStarted(true);
    } else if (!gameOver) {
      setGameOver(true);
      // FIXME stop timer?
    }
  };

  return (
    <Game
      headline={template.headline}
      image={template?.image ?? null}
      questionStatus={questionStatus}
      otherGames={otherGames}
      wasStarted={wasStarted}
      gameOver={gameOver}
      timeLeft={timeLeft}
      score={score}
      onGuess={submitGuess}
      onButton={handleButton}
    />
  );
};

export default GameController;
