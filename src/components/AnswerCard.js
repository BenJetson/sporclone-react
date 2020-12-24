import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Divider,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: "center",
  },
  correct: {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.contrastText,
  },
  incorrect: {
    backgroundColor: theme.palette.error.light,
    color: theme.palette.error.contrastText,
  },
}));

let AnswerCard = ({ label, answer, showAnswer = false, isCorrect = null }) => {
  const classes = useStyles();

  let cardClass = classes.card;
  if (isCorrect !== null) {
    cardClass += " " + (isCorrect ? classes.correct : classes.incorrect);
  }

  return (
    <Card variant="outlined" className={cardClass}>
      <CardContent>
        <Typography element="p" variant="h6">
          {String(label)}
        </Typography>
      </CardContent>
      <Divider />
      <CardContent>
        <Typography variant="body1">
          {showAnswer ? String(answer) : ""}
        </Typography>
      </CardContent>
    </Card>
  );
};

AnswerCard.propTypes = {
  label: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  showAnswer: PropTypes.bool,
  isCorrect: PropTypes.bool,
};

export default AnswerCard;
