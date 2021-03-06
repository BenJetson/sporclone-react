import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Game from "./Game";
import NavigationBlock from "./NavigationBlock";

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
  if (!allGames || !Array.isArray(allGames)) {
    return [];
  }

  const maxCount = 3;
  // Must subtract one for the current game.
  if (allGames.length - 1 <= maxCount) {
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

let GameController = ({ gameId, gameIdx, template, allGames }) => {
  const [questionStatus, setQuestionStatus] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [wasStarted, setWasStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [otherGames, setOtherGames] = useState([]);
  const [score, setScore] = useState(0);

  // Reset the game state when the props change.
  useEffect(() => {
    setQuestionStatus(makeInitialQuestionStatus(template.questions));
    setTimeLeft(template.time);
    setWasStarted(false);
    setGameOver(false);
    setOtherGames(selectOtherGames(gameIdx, allGames));
    setScore(0);
  }, [gameIdx, template, allGames]);

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
  }, [wasStarted, gameOver, timeLeft]);

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
    <>
      <NavigationBlock
        when={wasStarted && !gameOver}
        message={
          "You have a game in progress.\n" +
          "Are you sure you want to navigate away?"
        }
      />
      <Game
        gameId={gameId}
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
    </>
  );
};

GameController.propTypes = {
  gameIdx: PropTypes.number.isRequired,
  template: PropTypes.shape({
    time: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        answers: PropTypes.shape({
          display: PropTypes.string.isRequired,
          accepts: PropTypes.arrayOf(PropTypes.string).isRequired,
        }).isRequired,
      })
    ).isRequired,
  }).isRequired,
  allGames: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
};

export default GameController;
