import React from "react";
import { makeInitialQuestionStatus } from "./GameController";
import Game from "./Game";
import { Container } from "@material-ui/core";

import UbuntuTemplate from "../games/ubuntu";

export default {
  title: "Game",
  component: Game,
  argTypes: {
    headline: { control: "text" },
    image: { control: "object" },
    questionStatus: { control: "object" },
    otherGames: { control: "array" },
    wasStarted: { control: "boolean" },
    gameOver: { control: "boolean" },
    timeLeft: { control: "number" },
  },
};

const Template = (args) => (
  <Container>
    <Game {...args} />
  </Container>
);

export const Ubuntu = Template.bind({});
Ubuntu.args = {
  headline: UbuntuTemplate.headline,
  questionStatus: makeInitialQuestionStatus(UbuntuTemplate.questions),
  image: UbuntuTemplate.image,
  otherGames: [
    {
      name: "Cactus Types",
      id: "cactus-types",
    },
    {
      name: "Zoo Animals",
      id: "zoo-animals",
    },
    {
      name: "Electoral Votes",
      id: "us-electoral",
    },
  ],
  wasStarted: false,
  gameOver: false,
  timeLeft: 185,
};
