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
import { Alert as BasicAlert, AlertTitle } from "@material-ui/lab";
import ChipInput from "material-ui-chip-input";
import { Add, ArrowDownward, ArrowUpward, Delete } from "@material-ui/icons";

const InputGroupCard = styled(Card)({
  marginBottom: "2em",
});

const Alert = styled(BasicAlert)({
  marginBottom: "1em",
});

let Editor = ({
  game,
  invalid,
  wasSubmitted,
  updateField,
  onSubmit,
  addQuestion,
  deleteQuestion,
  moveQuestion,
}) => {
  const fieldHasError = (fieldName) => {
    return invalid[fieldName] ? true : false;
  };

  const updateAcceptedAnswers = (fieldPrefix, values, op) => {
    const doUpdate = updateField(`${fieldPrefix}.answers.accepts`);
    return (chip, answerIdx = null) => {
      let updatedValues = [...values];

      if (op === "add") {
        updatedValues.push(chip);
      } else if (op === "delete") {
        updatedValues.splice(answerIdx, 1);
      } else {
        throw `Invalid operation for accepted answer update: '${op}'.`;
      }

      doUpdate({
        target: {
          value: updatedValues,
        },
      });
    };
  };

  const isImageRequired = () =>
    game.image.src.length > 0 || game.image.alt.length > 0;

  return (
    <Box>
      {(Object.keys(invalid).length > 0 && (
        <Alert severity="error">
          <AlertTitle>Game Contains Errors</AlertTitle>
          The game cannot be downloaded because either required fields are blank
          or some field contains incorrect data.
          <br />
          Please review the highlighted fields and alert messages, resolve the
          problems, and try to download again.
          <br />
          <br />
          This alert will disappear automatically once the errors are resolved.
        </Alert>
      )) ||
        (wasSubmitted && (
          <Alert severity="success">
            <AlertTitle>Game Ready</AlertTitle>
            The game contains zero errors and is ready for download.
          </Alert>
        ))}
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
                color="secondary"
                fullWidth
                InputProps={{ style: { fontFamily: "monospace" } }}
                required
                helperText={
                  invalid["id"] ??
                  "This is a globally unique identifier for this game. " +
                    "It must consist of strictly lowercase alphanumeric " +
                    "characters and underscores."
                }
                value={game.id}
                onChange={updateField("id")}
                error={fieldHasError("id")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Title"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                helperText={
                  invalid["title"] ??
                  "The shorter title of the game displayed in menus."
                }
                value={game.title}
                onChange={updateField("title")}
                error={fieldHasError("title")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Headline"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                helperText={
                  invalid["headline"] ??
                  "The extended description of what the player is tasked " +
                    "with entering."
                }
                value={game.headline}
                onChange={updateField("headline")}
                error={fieldHasError("headline")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Image Source"
                variant="outlined"
                color="secondary"
                fullWidth
                required={isImageRequired()}
                helperText={invalid["image.src"] ?? ""}
                value={game.image.src}
                onChange={updateField("image.src")}
                error={fieldHasError("image.src")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Image Alt Text"
                variant="outlined"
                color="secondary"
                fullWidth
                required={isImageRequired()}
                helperText={invalid["image.alt"] ?? ""}
                value={game.image.alt}
                onChange={updateField("image.alt")}
                error={fieldHasError("image.alt")}
              />
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
                color="secondary"
                fullWidth
                required
                helperText={invalid["time"] ?? ""}
                value={game.time}
                onChange={updateField("time")}
                error={fieldHasError("time")}
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

          {invalid["questions"] && (
            <Alert severity="error" style={{ marginBottom: "1em" }}>
              {invalid["questions"]}
            </Alert>
          )}

          {game.questions.map((q, idx) => {
            const fieldPrefix = `questions[${idx}]`;

            return (
              <Card
                variant="outlined"
                key={q.id}
                style={{
                  marginBottom: idx !== game.questions.length - 1 ? "1em" : 0,
                }}
              >
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom={true}>
                    Question {idx + 1}
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        color="secondary"
                        label="Displayed Question"
                        fullWidth
                        required
                        helperText={invalid[`${fieldPrefix}.label`] ?? ""}
                        value={q.label}
                        onChange={updateField(`${fieldPrefix}.label`)}
                        error={fieldHasError(`${fieldPrefix}.label`)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        color="secondary"
                        label="Displayed Answer"
                        fullWidth
                        required
                        helperText={
                          invalid[`${fieldPrefix}.answers.display`] ?? ""
                        }
                        value={q.answers.display}
                        onChange={updateField(`${fieldPrefix}.answers.display`)}
                        error={fieldHasError(`${fieldPrefix}.answers.display`)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ChipInput
                        variant="outlined"
                        color="secondary"
                        label="Accepted Answers"
                        fullWidth
                        required
                        helperText={
                          invalid[`${fieldPrefix}.answers.accepts`] ??
                          "The list of accepted answers does not include the " +
                            "displayed answer unless it is also included here."
                        }
                        value={q.answers.accepts}
                        onAdd={updateAcceptedAnswers(
                          fieldPrefix,
                          q.answers.accepts,
                          "add"
                        )}
                        onDelete={updateAcceptedAnswers(
                          fieldPrefix,
                          q.answers.accepts,
                          "delete"
                        )}
                        error={fieldHasError(`${fieldPrefix}.answers.accepts`)}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="delete" onClick={deleteQuestion(idx)}>
                    <Delete />
                  </IconButton>
                  <IconButton
                    aria-label="move up"
                    onClick={moveQuestion(idx, "up")}
                  >
                    <ArrowUpward />
                  </IconButton>
                  <IconButton
                    aria-label="move down"
                    onClick={moveQuestion(idx, "down")}
                  >
                    <ArrowDownward />
                  </IconButton>
                </CardActions>
              </Card>
            );
          })}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add question" onClick={addQuestion}>
            <Add />
          </IconButton>
        </CardActions>
      </InputGroupCard>

      <Button variant="contained" color="primary" onClick={onSubmit}>
        Download
      </Button>
    </Box>
  );
};

export default Editor;
