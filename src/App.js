import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, ThemeProvider } from "@material-ui/core";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Theme from "./Theme";

import GameIndex from "./games/index.json";
import GameController from "./components/GameController";

let App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <NavBar />
        <Container>
          <Switch>
            {GameIndex.map((g, idx) => {
              // TODO would be better to load these dynamically via AJAX instead
              // of doing it at build time
              let game = require(`./games/${g.id}.json`);
              return (
                <Route path={`/game/${g.id}`}>
                  <GameController
                    gameIdx={idx}
                    template={game}
                    allGames={GameIndex}
                  />
                </Route>
              );
            })}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
