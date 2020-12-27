import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Box, CircularProgress, Typography } from "@material-ui/core";
import { Error } from "@material-ui/icons";

import GetGameIndex from "./GameIndexLoader";
import { BaseURL } from "../Const";

let GameLoader = ({ component: Component }) => {
  const { gameId } = useParams();

  const [allGames, setAllGames] = useState(null);
  const [gameIdx, setGameIdx] = useState(null);
  const [gameData, setGameData] = useState(null);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    (async () => {
      const GameIndex = await GetGameIndex();
      setAllGames(GameIndex);

      let foundIdx = null;
      for (let i = 0; i < GameIndex.length; i++) {
        if (GameIndex[i].id === gameId) {
          foundIdx = i;
          break;
        }
      }

      if (foundIdx === null) {
        setGameData(false);
        setLoadError(`No game exists by the ID of "${gameId}".`);
        return;
      }

      setGameIdx(foundIdx);

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
      <Component
        gameId={gameId}
        gameIdx={gameIdx}
        allGames={allGames}
        template={gameData}
      />
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
