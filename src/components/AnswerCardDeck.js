import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, makeStyles } from "@material-ui/core";
import AnswerCard from "./AnswerCard";

const useStyles = makeStyles((theme) => ({
  blur: {
    filter: "blur(15px)",
    transitionProperty: "filter",
    transitionDuration: "2s",
    transitionTimingFunction: "ease",
    userSelect: "none",
  },
  unblur: {
    filter: "none",
    userSelect: "auto",
  },
}));

let AnswerCardDeck = ({ questions, blur = true, showKey = false }) => {
  const classes = useStyles();

  let cards = [];
  for (let question of questions) {
    cards.push({
      label: question.label,
      answer: question.answer,
      showAnswer: showKey || question.isCorrect,
      markCorrect:
        question.isCorrect === true
          ? true
          : showKey
          ? question.isCorrect
          : null,
    });
  }

  return (
    <Box className={`${classes.blur} ${!blur ? classes.unblur : ""}`}>
      <Grid container spacing={1}>
        {cards.map((card, idx) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={idx}>
            <AnswerCard {...card} />
          </Grid>
        ))}
      </Grid>
    </Box>
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
