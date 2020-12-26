import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import GameController from "./GameController";
import { Box, CircularProgress, Typography, styled } from "@material-ui/core";
import { Error } from "@material-ui/icons";

import GameIndex from "../games/index.json";

let findGameIdx = (gameId) => {
  for (let i = 0; i < GameIndex.length; i++) {
    if (GameIndex[i].id === gameId) {
      return i;
    }
  }
  return null;
};

let CenterBox = styled(Box)({
  textAlign: "center",
  paddingTop: "20vh",
});

let GameLoader = () => {
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
        const response = await fetch(`/games/${gameId}.json`);
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
      <GameController
        gameIdx={gameIdx}
        allGames={GameIndex}
        template={gameData}
      />
    );
  } else if (gameData === null) {
    return (
      <Box>
        <CenterBox>
          <CircularProgress size="5em" style={{ marginBottom: "2em" }} />
          <Typography variant="h3" component="h2">
            Loading...
          </Typography>
        </CenterBox>
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
