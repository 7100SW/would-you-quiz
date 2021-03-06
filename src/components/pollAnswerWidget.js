import React from "react";
import {withStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {Card, CardHeader} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import {PollAnswerOptionStatsWidget} from "./pollAnswerOptionStatsWidget";

const styles = () => ({
  root: {
    minWidth: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    marginTop: "50px",
  },
  card: {
    maxWidth: "75%",
    minWidth: "50%",
    minHeight: "30vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },
  cardHeader: {
    backgroundColor: "lightBlue",
    width: "100%",
  },
});

function PollAnswerWidget(props) {
  const {classes} = props;
  const {askedBy: author} = props.question;
  const {count: totalVotes} = props.answers;

  return (
      <Grid
          className={classes.root}
          alignItems="center"
          justifyContent="center"
          container
      >
        <Card className={classes.card}>
          <CardHeader
              title={`Asked By: ${author.name}`}
              className={classes.cardHeader}
          />
          <CardContent
              style={{
                width: "95%",
              }}
          >
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="stretch"
                spacing={3}
                style={{
                  padding: "1.0rem",
                }}
            >
              <Grid item xs={12}>
                <PollAnswerOptionStatsWidget
                    answerText={props.question.optionOne.text}
                    users={props.answers.optionOne}
                    totalVotes={totalVotes}
                />
              </Grid>
              <Grid item xs={12}>
                <PollAnswerOptionStatsWidget
                    answerText={props.question.optionTwo.text}
                    users={props.answers.optionTwo}
                    totalVotes={totalVotes}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
  );
}

PollAnswerWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  question: PropTypes.object.isRequired,
  answers: PropTypes.object.isRequired,
};

export default withStyles(styles)(PollAnswerWidget);
