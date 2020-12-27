import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";

import GetGameIndex from "./GameIndexLoader";

let NavDrawer = ({ open, onClose }) => {
  const [allGames, setAllGames] = useState([]);

  useEffect(() => {
    (async () => {
      setAllGames(await GetGameIndex());
    })();
  });

  return (
    <Drawer open={open} onClose={onClose}>
      <List>
        <ListItem component={Link} button to={"/"} onClick={onClose}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem dense={true}>
          <Typography variant="overline">All Games</Typography>
        </ListItem>
        {allGames.map((g, idx) => (
          <ListItem
            component={Link}
            button
            to={`/play/${g.id}`}
            onClick={onClose}
            key={idx}
          >
            <ListItemText primary={g.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default NavDrawer;
