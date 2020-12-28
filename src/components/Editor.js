import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  TextField,
  Typography,
  Link as MaterialLink,
  styled,
  Tooltip,
} from "@material-ui/core";
import { Alert as BasicAlert, AlertTitle } from "@material-ui/lab";
import ChipInput from "material-ui-chip-input";
import {
  Add,
  ArrowDownward,
  ArrowUpward,
  Delete,
  FileCopy,
  GetApp,
} from "@material-ui/icons";

const Alert = styled(BasicAlert)({
  marginBottom: "1em",
});

const Section = styled(Box)({
  margin: "2em 0",
});

let Editor = ({
  game,
  invalid,
  wasSubmitted,
  updateField,
  onSubmit,
  addQuestion,
  duplicateQuestion,
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
        throw new Error(
          `Invalid operation for accepted answer update: '${op}'.`
        );
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
      <Typography variant="h4" component="h2" gutterBottom>
        Game Editor
      </Typography>
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
      <Typography variant="subtitle1" component="p">
        The presence of * indicates required fields.
      </Typography>
      <Section>
        <Typography variant="h5" component="h3" gutterBottom>
          Header
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="gameIDField"
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
              id="titleField"
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
              id="headlineField"
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
              id="imageSrcField"
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
              id="imageAltField"
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
      </Section>
      <Section>
        <Typography variant="h5" component="h3" gutterBottom={true}>
          Game Settings
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="timeField"
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
      </Section>
      <Section>
        <Typography variant="h5" component="h3" gutterBottom>
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
                <Typography variant="h6" component="h4" gutterBottom>
                  Question {idx + 1}
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id={`question${idx + 1}LabelField`}
                      variant="outlined"
                      color="secondary"
                      label="Displayed Question"
                      fullWidth
                      required
                      helperText={invalid[`${fieldPrefix}.label`] ?? ""}
                      value={q.label}
                      onChange={updateField(`${fieldPrefix}.label`)}
                      error={fieldHasError(`${fieldPrefix}.label`)}
                      inputProps={{
                        "aria-label": `Question ${idx + 1} Displayed Question`,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id={`question${idx + 1}DisplayedAnswerField`}
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
                      inputProps={{
                        "aria-label": `Question ${idx + 1} Displayed Answer`,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ChipInput
                      id={`question${idx + 1}AcceptedAnswersField`}
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
                      InputProps={{
                        inputProps: {
                          "aria-label": `Question ${idx + 1} Accepted Answers`,
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions disableSpacing>
                <Tooltip title="Delete">
                  <IconButton aria-label="delete" onClick={deleteQuestion(idx)}>
                    <Delete />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Move Question Up">
                  <Box>
                    <IconButton
                      aria-label="move up"
                      onClick={moveQuestion(idx, "up")}
                      disabled={idx === 0}
                    >
                      <ArrowUpward />
                    </IconButton>
                  </Box>
                </Tooltip>
                <Tooltip title="Move Question Down">
                  <Box>
                    <IconButton
                      aria-label="move down"
                      onClick={moveQuestion(idx, "down")}
                      disabled={idx === game.questions.length - 1}
                    >
                      <ArrowDownward />
                    </IconButton>
                  </Box>
                </Tooltip>
                <Tooltip title="Duplicate Question">
                  <IconButton
                    aria-label="duplicate question"
                    onClick={duplicateQuestion(idx)}
                  >
                    <FileCopy />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Add Question Above">
                  <IconButton
                    aria-label="add question above"
                    onClick={addQuestion(idx)}
                  >
                    <Add />
                  </IconButton>
                </Tooltip>
              </CardActions>
            </Card>
          );
        })}
        <Tooltip title="Add Question">
          <IconButton aria-label="add question" onClick={addQuestion()}>
            <Add />
          </IconButton>
        </Tooltip>
      </Section>
      <Typography variant="srOnly" component="h3" gutterBottom>
        Download
      </Typography>
      <Alert severity="info">
        <AlertTitle>All Finished. What Next?</AlertTitle>
        <Typography gutterBottom>
          All games on the site are stored as JSON files in the
          <MaterialLink
            href="https://github.com/BenJetson/sporclone-react/tree/main/public/games"
            target="_blank"
            rel="noopener"
          >
            &nbsp;games folder&nbsp;
          </MaterialLink>
          of the GitHub repository. In order for the game to be added, modified,
          or deleted you must submit a pull request to the repository to alter
          the relevant file.
        </Typography>
        <Typography gutterBottom>
          You can download the game in the proper file format using the button
          below.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={onSubmit}
          startIcon={<GetApp />}
        >
          Download
        </Button>
      </Alert>
    </Box>
  );
};

export default Editor;
