import React, { useState, useEffect } from "react";
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

let selectOtherGames = (currentIdx, allGames) => {
  const maxCount = 3;
  // Must subtract one for the current game.
  if (allGames.length <= maxCount - 1) {
    return [
      ...allGames.slice(0, currentIdx),
      ...allGames.slice(currentIdx + 1),
    ];
  }

  const selectedGames = {};
  while (Object.keys(selectedGames).length < maxCount) {
    let idx = Math.floor(Math.random() * allGames.length);
    if (idx in selectedGames || idx === currentIdx) {
      continue;
    }

    selectedGames[idx] = allGames[idx];
  }

  return Object.values(selectedGames);
};

let GameController = ({ gameIdx, template, allGames }) => {
  const [questionStatus, setQuestionStatus] = useState(
    makeInitialQuestionStatus(template.questions)
  );
  const [timeLeft, setTimeLeft] = useState(template.time);
  const [wasStarted, setWasStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [otherGames] = useState(selectOtherGames(gameIdx, allGames)); // FIXME
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (wasStarted && !gameOver) {
      let timerRef = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
        if (timeLeft < 1) {
          setGameOver(true);
        }
      }, 1000);

      return () => {
        clearTimeout(timerRef);
      };
    }
  });

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
          }

          return true;
        }
      }
    }

    return false;
  };

  let handleButton = () => {
    if (!wasStarted) {
      setWasStarted(true);
    } else if (!gameOver) {
      setGameOver(true);
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
