import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
  makeStyles,
  styled,
} from "@material-ui/core";
import AnswerCardDeck from "./AnswerCardDeck";
import { Link } from "react-router-dom";
import { Edit } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  headerImg: {
    maxWidth: 82,
    maxHeight: 82,
    border: `1px solid ${theme.palette.grey[500]}`,
  },
  otherGames: {
    borderLeft: `1px solid ${theme.palette.grey[300]}`,
  },
  timerWarning: {
    color: theme.palette.error.main,
    fontWeight: "bold",
  },
  center: {
    textAlign: "center",
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
  gameId,
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

  const handleGuess = (event) => {
    const input = event.target;
    const guess = input.value;
    const correct = onGuess(guess);

    if (correct) {
      input.value = "";
    }
  };

  const hasImage = image && image.src && image.alt;

  return (
    <>
      <Section>
        <Grid container spacing={2}>
          {hasImage && (
            <Grid item xs={"auto"}>
              <img
                className={classes.headerImg}
                src={image.src}
                alt={image.alt}
              />
            </Grid>
          )}
          <Grid item xs={hasImage ? 8 : 9}>
            <Typography variant="h4" component="h2">
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
                  <li key={`other-${g.id}`}>
                    <Link to={g.id}>{g.name}</Link>
                  </li>
                ))}
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Section>
      <Divider />
      <Section>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={4} sm={"auto"} className={classes.center}>
            {!wasStarted ? (
              <Button variant="contained" color="primary" onClick={onButton}>
                Start Game
              </Button>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                disabled={gameOver}
                onClick={onButton}
              >
                Give Up
              </Button>
            )}
          </Grid>
          <Grid item xs={8} sm>
            {wasStarted && !gameOver && (
              <TextField
                label="Enter Guess"
                id="guessField"
                variant="outlined"
                size="small"
                color="secondary"
                fullWidth
                onKeyUp={handleGuess}
                autoFocus
              />
            )}
          </Grid>
          <Grid item xs={6} sm={2} className={classes.center}>
            <Typography variant="h6" component="h4">
              Score
            </Typography>
            <Typography aria-label={`${score} out of ${questionStatus.length}`}>
              {score}/{questionStatus.length}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} className={classes.center}>
            <Typography variant="h6" component="h4">
              Time
            </Typography>
            <Typography className={timeLeft < 16 ? classes.timerWarning : null}>
              {secondsToTime(timeLeft)}
            </Typography>
          </Grid>
        </Grid>
      </Section>
      <Divider />
      <Typography variant="srOnly" aria-hidden={wasStarted}>
        Once the game has started, game tiles will appear here.
      </Typography>
      <Section aria-hidden={!wasStarted}>
        <AnswerCardDeck
          questions={questionStatus}
          blur={!wasStarted}
          showKey={gameOver}
        />
      </Section>
      <Section>
        <Button component={Link} to={`/edit/${gameId}`} startIcon={<Edit />}>
          Edit this Game
        </Button>
      </Section>
    </>
  );
};

Game.propTypes = {
  headline: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  questionStatus: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
      accepts: PropTypes.arrayOf(PropTypes.string).isRequired,
      isCorrect: PropTypes.bool.isRequired,
    })
  ).isRequired,
  otherGames: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
  wasStarted: PropTypes.bool.isRequired,
  gameOver: PropTypes.bool.isRequired,
  timeLeft: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  onGuess: PropTypes.func.isRequired,
  onButton: PropTypes.func.isRequired,
};

export default Game;
