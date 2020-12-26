import React from "react";
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

const useStyles = makeStyles((theme) => ({
  navbar: {
    marginBottom: "1.5em",
  },
}));

let NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="h1">
          <Link to="/" component={RouterLink} color="inherit">
            Sporclone
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
