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
        <Typography
          variant="body1"
          paragraph={false}
          className={classes.answerText}
        >
          <Grid container direction="row" alignItems="center" spacing={1}>
            {markCorrect !== null && (
              <Grid item xs={"auto"}>
                {markCorrect ? <CheckCircle /> : <Error />}
                <Typography variant="srOnly">
                  {markCorrect ? "correct" : "not correct"}
                </Typography>
              </Grid>
            )}
            <Grid item xs>
              {showAnswer ? answer : <HelpOutline />}
            </Grid>
          </Grid>
        </Typography>
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
