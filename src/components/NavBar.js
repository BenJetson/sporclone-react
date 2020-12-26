import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Link,
  // SwipeableDrawer,
  // Button,
  makeStyles,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { Link as RouterLink } from "react-router-dom";

import NavDrawer from "./NavDrawer";
import { BaseURL } from "../Const";

const useStyles = makeStyles((theme) => ({
  navbar: {
    marginBottom: "1.5em",
  },
}));

let NavBar = () => {
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false);
  let openDrawer = () => setDrawerOpen(true);
  let closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <NavDrawer open={drawerOpen} onClose={closeDrawer} />
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={openDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="h1">
            <Link to={BaseURL} component={RouterLink} color="inherit">
              Sporclone
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
