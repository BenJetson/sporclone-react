import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Container, ThemeProvider } from "@material-ui/core";

import ScrollSpy from "./components/ScrollSpy";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Theme from "./Theme";

import GameLoader from "./components/GameLoader";
import GameController from "./components/GameController";
import EditorController from "./components/EditorController";

let App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <ScrollSpy />
        <NavBar />
        <Container>
          <Switch>
            <Route
              path={"/play/:gameId"}
              children={<GameLoader component={GameController} />}
            />
            <Route path={"/create"}>
              <EditorController />
            </Route>
            <Route
              path={"/edit/:gameId"}
              children={<GameLoader component={EditorController} />}
            />
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
