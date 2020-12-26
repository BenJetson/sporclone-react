import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, ThemeProvider } from "@material-ui/core";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Theme from "./Theme";

import GameIndex from "./games/index.json";
import GameLoader from "./components/GameLoader";

let App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <NavBar />
        <Container>
          <Switch>
            {GameIndex.map((g, idx) => {
              return (
                <Route path={`/game/${g.id}`} key={idx}>
                  <GameLoader
                    gameId={g.id}
                    gameIdx={idx}
                    allGames={GameIndex}
                  />
                </Route>
              );
            })}
            <Route path="/" key="home">
              <Home />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
