import React from "react";
import { Container } from "@material-ui/core";
import GameController from "./GameController";

import GameIndex from "../games/index";
import UbuntuTemplate from "../games/ubuntu";

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
  <Container>
    <GameController {...args} />
  </Container>
);

export const Ubuntu = Template.bind({});
Ubuntu.args = {
  template: UbuntuTemplate,
  gameIdx: 0,
  allGames: GameIndex,
};
