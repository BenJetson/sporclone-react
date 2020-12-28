import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { HelpOutline, CheckCircle, Error } from "@material-ui/icons";

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
  answerContainer: {
    paddingBottom: "16px !important",
  },
  answerText: {
    lineHeight: 1,
  },
}));

let AnswerCard = ({
  label,
  answer,
  showAnswer = false,
  markCorrect = null,
}) => {
  const classes = useStyles();

  let cardClass = classes.card;
  if (markCorrect !== null) {
    cardClass += " " + (markCorrect ? classes.correct : classes.incorrect);
  }

  return (
    <Card variant="outlined" className={cardClass}>
      <CardContent>
        <Typography element="p" variant="h6">
          {label}
        </Typography>
      </CardContent>
      <Divider />
      <CardContent className={classes.answerContainer}>
        <Grid container direction="row" alignItems="center" spacing={1}>
          {markCorrect !== null && (
            <Grid item xs={"auto"}>
              <Typography
                variant="body1"
                paragraph={false}
                className={classes.answerText}
              >
                {markCorrect ? <CheckCircle /> : <Error />}
              </Typography>
              <Typography variant="srOnly">
                {markCorrect ? "correct" : "not correct"}
              </Typography>
            </Grid>
          )}
          <Grid item xs>
            {showAnswer ? (
              <Typography
                variant="body1"
                paragraph={false}
                className={classes.answerText}
              >
                {answer}
              </Typography>
            ) : (
              <HelpOutline />
            )}
            {!showAnswer && (
              <Typography variant="srOnly">Not Answered Yet</Typography>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

AnswerCard.propTypes = {
  label: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  showAnswer: PropTypes.bool,
  markCorrect: PropTypes.bool,
};

export default AnswerCard;
