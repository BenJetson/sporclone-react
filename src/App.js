import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Container, ThemeProvider } from "@material-ui/core";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Theme from "./Theme";
import { BaseURL } from "./Const";

import GameLoader from "./components/GameLoader";

let App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Router basename={BaseURL}>
        <NavBar />
        <Container>
          <Switch>
            <Route path={"/game/:gameId"} children={<GameLoader />} />
            <Route path={"/"} key="home">
              <Home />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
