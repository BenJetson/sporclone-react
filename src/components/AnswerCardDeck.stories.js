import React from "react";
import AnswerCardDeck from "./AnswerCardDeck";

export default {
  title: "AnswerCardDeck",
  component: AnswerCardDeck,
  argTypes: {
    questions: "array",
  },
};

const Template = (args) => <AnswerCardDeck {...args} />;

export const Start = Template.bind({});
Start.args = {
  questions: [
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
      isCorrect: true,
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

export const GameOver = Template.bind({});
GameOver.args = {
  showKey: true,
  questions: [
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
      isCorrect: true,
    },
    {
      label: "Ubuntu 12.04",
      answer: "Precise Pangolin",
      isCorrect: true,
    },
    {
      label: "Ubuntu 10.04",
      answer: "Lucid Lynx",
      isCorrect: false,
    },
  ],
};
