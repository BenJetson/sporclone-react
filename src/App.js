import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, ThemeProvider } from "@material-ui/core";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Theme from "./Theme";
import { BaseURL } from "./Const";

import GameLoader from "./components/GameLoader";

let App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <NavBar />
        <Container>
          {/* <Route path={BaseURL}> */}
          <Switch>
            <Route path={`${BaseURL}/game/:gameId`} children={<GameLoader />} />
            <Route path={BaseURL} key="home">
              <Home />
            </Route>
          </Switch>
          {/* </Route> */}
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
