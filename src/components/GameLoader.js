import React, { useEffect, useState } from "react";

import GameController from "./GameController";
import { CircularProgress } from "@material-ui/core";
import { Error } from "@material-ui/icons";

let GameLoader = ({ gameId, gameIdx, allGames }) => {
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/games/${gameId}.json`);
        const parsed = await response.json();
        setGameData(parsed);
      } catch {
        setGameData(false);
      }
    })();
  }, [gameId, gameIdx, allGames]);

  if (gameData) {
    return (
      <GameController
        gameIdx={gameIdx}
        allGames={allGames}
        template={gameData}
      />
    );
  } else if (gameData === null) {
    return <CircularProgress />;
  }

  return <Error />;
};

export default GameLoader;
