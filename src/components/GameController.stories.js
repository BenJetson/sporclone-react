import React from "react";
import { Container, ThemeProvider } from "@material-ui/core";
import GameController from "./GameController";

import GameIndex from "../games/index";
import UbuntuTemplate from "../games/ubuntu";
import Theme from "../Theme";

export default {
  title: "GameController",
  component: GameController,
  argTypes: {
    template: { control: "object" },
    gameIdx: { control: "number" },
    allGames: { control: "array" },
  },
};

const Template = (args) => (
  <ThemeProvider theme={Theme}>
    <Container>
      <GameController {...args} />
    </Container>
  </ThemeProvider>
);

export const Ubuntu = Template.bind({});
Ubuntu.args = {
  template: UbuntuTemplate,
  gameIdx: 0,
  allGames: GameIndex,
};
