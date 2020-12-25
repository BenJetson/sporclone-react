import React from "react";
import AnswerCard from "./AnswerCard.js";

export default {
  title: "AnswerCard",
  component: AnswerCard,
  argTypes: {
    label: "text",
    answer: "text",
    showAnswer: "boolean",
    markCorrect: "boolean",
  },
};

const Template = (args) => <AnswerCard {...args} />;

export const Start = Template.bind({});
Start.args = {
  label: "Ubuntu 80.04 LTS",
  answer: "Something Special",
};

export const Answered = Template.bind({});
Answered.args = {
  label: "Ubuntu 80.04 LTS",
  answer: "Something Special",
  showAnswer: true,
};

export const Correct = Template.bind({});
Correct.args = {
  label: "Ubuntu 80.04 LTS",
  answer: "Something Special",
  showAnswer: true,
  markCorrect: true,
};

export const Inorrect = Template.bind({});
Inorrect.args = {
  label: "Ubuntu 80.04 LTS",
  answer: "Something Special",
  showAnswer: true,
  markCorrect: false,
};
