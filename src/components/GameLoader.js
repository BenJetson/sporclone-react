import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import GameController from "./GameController";
import { Box, CircularProgress, Typography } from "@material-ui/core";
import { Error } from "@material-ui/icons";

import GameIndex from "../games/index.json";
import { BaseURL } from "../Const";

let findGameIdx = (gameId) => {
  for (let i = 0; i < GameIndex.length; i++) {
    if (GameIndex[i].id === gameId) {
      return i;
    }
  }
  return null;
};

let GameLoader = ({ component: Component }) => {
  const { gameId } = useParams();

  const [gameIdx, setGameIdx] = useState(null);
  const [gameData, setGameData] = useState(null);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    const foundIdx = findGameIdx(gameId);
    if (foundIdx === null) {
      setGameData(false);
      setLoadError(`No game exists by the ID of "${gameId}".`);
      return;
    }

    setGameIdx(foundIdx);

    (async () => {
      try {
        const response = await fetch(`${BaseURL}/games/${gameId}.json`);
        const parsed = await response.json();
        setGameData(parsed);
      } catch {
        setGameData(false);
        setLoadError("Could not retrieve game template from server.");
      }
    })();
  }, [gameId]);

  if (gameData) {
    return (
      <Component gameIdx={gameIdx} allGames={GameIndex} template={gameData} />
    );
  } else if (gameData === null) {
    return (
      <Box style={{ textAlign: "center", marginTop: "25vmin" }}>
        <CircularProgress size="30vmin" />
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h3">
        <Error fontSize="large" /> Error
      </Typography>
      <Typography>
        Sporclone could not load the game due to a problem.
      </Typography>
      <Typography>{loadError ?? "An unknown error has occurred."}</Typography>
    </Box>
  );
};

export default GameLoader;
