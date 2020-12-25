import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import AnswerCard from "./AnswerCard";

let AnswerCardDeck = ({ questions, showKey = false }) => {
  let cards = [];
  for (let question of questions) {
    cards.push({
      label: question.label,
      answer: question.answer,
      showAnswer: showKey || question.isCorrect,
      markCorrect: showKey ? question.isCorrect : null,
    });
  }

  return (
    <Grid container spacing={1}>
      {cards.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <AnswerCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

AnswerCardDeck.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
      isCorrect: PropTypes.bool.isRequired,
    })
  ).isRequired,
  showKey: PropTypes.bool,
};

export default AnswerCardDeck;
