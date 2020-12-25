import React from "react";
import { Container } from "@material-ui/core";
import GameController from "./GameController";

import UbuntuTemplate from "../games/ubuntu";

export default {
  title: "GameController",
  component: GameController,
  argTypes: {
    template: { control: "object" },
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
};
