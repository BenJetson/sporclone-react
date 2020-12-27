import React, { useState, useEffect } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import GetGameIndex from "./GameIndex";

let Home = () => {
  const [allGames, setAllGames] = useState([]);

  useEffect(() => {
    (async () => {
      setAllGames(await GetGameIndex());
    })();
  });

  return (
    <Box>
      <Typography variant="h2">Welcome to Sporclone!</Typography>
      <Typography>Select a game to play from the list below.</Typography>
      <List>
        {allGames.map((g, idx) => (
          <ListItem component={Link} button to={`/play/${g.id}`} key={idx}>
            <ListItemText primary={g.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Home;
