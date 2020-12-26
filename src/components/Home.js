import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import GameIndex from "../games/index.json";

let Home = () => (
  <Box>
    <Typography variant="h2">Welcome to Sporclone!</Typography>
    <Typography>Select a game to play from the list below.</Typography>
    <List>
      {GameIndex.map((g) => (
        <ListItem component={Link} button to={`/game/${g.id}`}>
          <ListItemText primary={g.name} />
        </ListItem>
      ))}
    </List>
  </Box>
);

export default Home;
