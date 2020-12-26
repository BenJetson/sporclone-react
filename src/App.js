import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, ThemeProvider } from "@material-ui/core";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Theme from "./Theme";

import GameLoader from "./components/GameLoader";

let baseUrl = "/sporclone-react";
if (process.env.NODE_ENV !== "production") {
  baseUrl = "";
}

let App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <NavBar />
        <Container>
          <Route path={baseUrl}>
            <Switch>
              <Route path="/game/:gameId" children={<GameLoader />} />
              <Route path="/" key="home">
                <Home />
              </Route>
            </Switch>
          </Route>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
