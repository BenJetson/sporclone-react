import React from "react";
import {
  Box,
  Button,
  Slider,
  TextField,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  Grid,
  styled,
} from "@material-ui/core";
import ChipInput from "material-ui-chip-input";
import { Add, ArrowDownward, ArrowUpward, Delete } from "@material-ui/icons";

const InputGroupCard = styled(Card)({
  marginBottom: "2em",
});

let Editor = ({ game, updateGame }) => {
  return (
    <Box>
      <Typography variant="subtitle1" gutterBottom={true}>
        The presence of * indicates required fields.
      </Typography>
      <InputGroupCard variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom={true}>
            Header
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Game ID"
                variant="outlined"
                fullWidth
                InputProps={{ style: { fontFamily: "monospace" } }}
                helperText={
                  "This is a globally unique identifier for this game. " +
                  "It must consist of strictly lowercase alphanumeric " +
                  "characters and underscores."
                }
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                required
                helperText="The shorter title of the game displayed in menus."
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Headline"
                variant="outlined"
                fullWidth
                required
                helperText={
                  "The extended description of what the player is tasked " +
                  "with entering."
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Image Source" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Image Alt Text" variant="outlined" fullWidth />
            </Grid>
          </Grid>
        </CardContent>
      </InputGroupCard>
      <InputGroupCard variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom={true}>
            Game Settings
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Time Limit"
                type="number"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
          </Grid>
        </CardContent>
      </InputGroupCard>
      <InputGroupCard variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom={true}>
            Questions
          </Typography>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" component="h3" gutterBottom={true}>
                Question 1
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    label="Displayed Question"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    label="Displayed Answer"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <ChipInput
                    variant="outlined"
                    label="Accepted Answers"
                    fullWidth
                    required
                    helperText={
                      "The list of accepted answers does not include the " +
                      "displayed answer unless it is also included here."
                    }
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="delete">
                <Delete />
              </IconButton>
              <IconButton aria-label="move up">
                <ArrowUpward />
              </IconButton>
              <IconButton aria-label="move down">
                <ArrowDownward />
              </IconButton>
            </CardActions>
          </Card>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add question">
            <Add />
          </IconButton>
        </CardActions>
      </InputGroupCard>
    </Box>
  );
};

export default Editor;
