import React from "react";
import AnswerCardDeck from "./AnswerCardDeck";

export default {
  title: "AnswerCardDeck",
  component: AnswerCardDeck,
  argTypes: {
    questions: { control: "array" },
    blur: { control: "boolean" },
    showKey: { control: "boolean" },
  },
};

const Template = (args) => <AnswerCardDeck {...args} />;

export const Initial = Template.bind({});
Initial.args = {
  questions: [
    {
      label: "Ubuntu 20.04",
      answer: "Focal Fossa",
      isCorrect: true,
    },
    {
      label: "Ubuntu 18.04",
      answer: "Bionic Beaver",
      isCorrect: false,
    },
    {
      label: "Ubuntu 16.04",
      answer: "Xenial Xeurus",
      isCorrect: true,
    },
    {
      label: "Ubuntu 14.04",
      answer: "Trusty Tahr",
      isCorrect: false,
    },
    {
      label: "Ubuntu 12.04",
      answer: "Precise Pangolin",
      isCorrect: true,
    },
    {
      label: "Ubuntu 10.04",
      answer: "Lucid Lynx",
      isCorrect: true,
    },
  ],
};

export const GameInProgress = Template.bind({});
GameInProgress.args = {
  ...Initial.args,
  blur: false,
};

export const GameOver = Template.bind({});
GameOver.args = {
  ...GameInProgress.args,
  showKey: true,
};
