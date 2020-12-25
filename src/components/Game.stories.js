import React from "react";
import Game from "./Game";
import { Container } from "@material-ui/core";

import UbuntuTemplate from "../games/ubuntu";

export default {
  title: "Game",
  component: Game,
  argTypes: {
    template: { control: "object" },
    otherGames: { control: "array" },
  },
};

const Template = (args) => (
  <Container>
    <Game {...args} />
  </Container>
);

export const Ubuntu = Template.bind({});
Ubuntu.args = {
  template: UbuntuTemplate,
  otherGames: [],
};
