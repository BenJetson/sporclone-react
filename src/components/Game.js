import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
  Typography,
  makeStyles,
  styled,
} from "@material-ui/core";
import AnswerCardDeck from "./AnswerCardDeck";

const useStyles = makeStyles((theme) => ({
  headerImg: {
    maxWidth: 82,
    maxHeight: 82,
    border: `1px solid ${theme.palette.grey[500]}`,
  },
  otherGames: {
    borderLeft: `1px solid ${theme.palette.grey[300]}`,
  },
}));

const Section = styled(Box)({
  margin: "1em 0",
});

let secondsToTime = (t) => {
  if (t < 0) t = 0;

  const m = `${Math.floor(t / 60)}`;
  const s = `${t % 60}`.padStart(2, "0");

  return `${m}:${s}`;
};

let Game = ({
  headline,
  image,
  questionStatus,
  otherGames,
  wasStarted,
  gameOver,
  timeLeft,
  score,
  onGuess,
  onButton,
}) => {
  const classes = useStyles();

  const inputRef = React.createRef();

  const handleButton = () => {
    onButton();

    if (!wasStarted) {
      // FIXME this is required to focus since it is disabled at the time
      // when the button is pressed, but will not be enabled until the next
      // render. Probably should do this another way.
      inputRef.current.removeAttribute("disabled");

      inputRef.current.focus();
    }
  };

  const handleGuess = (event) => {
    const input = event.target;
    const guess = input.value;
    const correct = onGuess(guess);

    if (correct) {
      input.value = "";
    }
  };

  return (
    <>
      <Section>
        <Grid container spacing={2}>
          {image && image.src && image.alt && (
            <Grid item xs={"auto"}>
              <img
                className={classes.headerImg}
                src={image.src}
                alt={image.alt}
              />
            </Grid>
          )}
          <Grid item xs={8}>
            <Typography variant="h4" component="h1">
              {headline}
            </Typography>
          </Grid>
          <Grid item className={classes.otherGames}>
            <Typography variant="h6" component="h3">
              Other Games
            </Typography>
            <Typography component="span">
              <ul>
                {otherGames.map((g) => (
                  <li>
                    <a href={g.id}>{g.title}</a>
                  </li>
                ))}
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Section>
      <Divider />
      <Section>
        <Grid container spacing={2}>
          <Grid item xs={"auto"}>
            {!wasStarted ? (
              <Button
                variant="contained"
                color="primary"
                onClick={handleButton}
              >
                Start Game
              </Button>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                disabled={gameOver}
                onClick={handleButton}
              >
                Give Up
              </Button>
            )}
          </Grid>
          <Grid item xs>
            <TextField
              label="Enter Guess"
              variant="outlined"
              size="small"
              fullWidth
              disabled={!wasStarted || gameOver}
              onKeyUp={handleGuess}
              inputRef={inputRef}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6" component="h4">
              Score
            </Typography>
            <Typography>
              {score}/{questionStatus.length}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6" component="h4">
              Time
            </Typography>
            <Typography>{secondsToTime(timeLeft)}</Typography>
          </Grid>
        </Grid>
      </Section>
      <Divider />
      <Section>
        <AnswerCardDeck
          questions={questionStatus}
          blur={!wasStarted}
          showKey={gameOver}
        />
      </Section>
    </>
  );
};

export default Game;
