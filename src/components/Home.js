import React, { useState, useEffect } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Add, PlayArrow } from "@material-ui/icons";
import { Link } from "react-router-dom";

import GetGameIndex from "./GameIndexLoader";

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
            <ListItemIcon>
              <PlayArrow />
            </ListItemIcon>
            <ListItemText primary={g.name} />
          </ListItem>
        ))}
      </List>
      <Typography>Or, alternatively:</Typography>
      <List>
        <ListItem component={Link} button to="/create">
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText primary="Create a new game" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Home;
