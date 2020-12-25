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

let Game = ({ template, otherGames = [] }) => {
  const classes = useStyles();

  const [selectedOtherGames] = useState(
    (() => {
      // On the first load of this component, we shall select to random games
      // from the other list to show and store them in state.
      // return [otherGames[1], otherGames[2]];

      return []; // FIXME
    })()
  );
  const [timeLeft, setTimeLeft] = useState(template.time);
  const [started, setStarted] = useState(false);

  const gameOver = started && timeLeft < 1;

  let questionStatus = [];
  for (let q of template.questions) {
    questionStatus.push({
      label: q.label,
      answer: q.answers.display,
      isCorrect: false,
    });
  }

  return (
    <>
      <Section>
        <Grid container spacing={2}>
          {template.image && (
            <Grid item xs={"auto"}>
              {/* TODO should probably style the size of this */}
              <img
                class={classes.headerImg}
                src={template.image.src}
                alt={template.image.alt}
              />
            </Grid>
          )}
          <Grid item xs={8}>
            <Typography variant="h4" component="h1">
              {template.headline}
            </Typography>
          </Grid>
          <Grid item className={classes.otherGames}>
            <Typography variant="h6" component="h3">
              Other Games
            </Typography>
            <ul>
              {selectedOtherGames.map((g) => (
                <li>
                  <a href={g.href}>{g.title}</a>
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Section>
      <Divider />
      <Section>
        <Grid container spacing={2}>
          <Grid item xs={"auto"}>
            <Button variant="contained" color="primary">
              Start Game
            </Button>
          </Grid>
          <Grid item xs>
            <TextField
              label="Enter Guess"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6" component="h4">
              Score
            </Typography>
            <Typography>0/32</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6" component="h4">
              Time
            </Typography>
            <Typography>3:00</Typography>
          </Grid>
        </Grid>
      </Section>
      <Divider />
      <Section>
        <AnswerCardDeck questions={questionStatus} blur={false} />
      </Section>
    </>
  );
};

export default Game;
