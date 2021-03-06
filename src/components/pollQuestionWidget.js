import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { QuestionWidget } from "./questionWidget";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { UserWidget } from "./userWidget";
import { QuestionWithAnswerWidget } from "./questionWithAnswerWidget";

// eslint-disable-next-line no-unused-vars
const styles = (theme) => ({
  root: {
    maxWidth: 640,
  },
  container: {
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "row",
  },
});

class PollQuestionWidget extends Component {
  constructor(props) {
    super(props);

    this.handleOnGiveAnswerClick = this.handleOnGiveAnswerClick.bind(this);

    this.handleOnViewPollResultsClick =
      this.handleOnViewPollResultsClick.bind(this);
  }

  handleOnGiveAnswerClick() {
    this.props.history.push(`/question/answer/${this.props.question.id}`);
  }

  handleOnViewPollResultsClick() {
    this.props.history.push(`/question/${this.props.question.id}`);
  }

  render() {
    const { classes, question } = this.props;

    return (
      <Card className={classes.root}>
        <CardContent className={classes.container}>
          <UserWidget
            id={question.askedBy.id}
            name={question.askedBy.name}
            avatarUrl={question.askedBy.avatarUrl}
          />

          {question.hasAnswer ? (
            <QuestionWithAnswerWidget
              id={question.id}
              opt1Text={question.optionOne.text}
              opt2Text={question.optionTwo.text}
              timestamp={question.timestamp}
              onClick={this.handleOnViewPollResultsClick}
            />
          ) : (
            <QuestionWidget
              id={question.id}
              opt1Text={question.optionOne.text}
              opt2Text={question.optionTwo.text}
              timestamp={question.timestamp}
              onClick={this.handleOnGiveAnswerClick}
            />
          )}
        </CardContent>
      </Card>
    );
  }
}

PollQuestionWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  question: PropTypes.object.isRequired,
  history: PropTypes.object,
};

export default withRouter(
  connect(null, null)(withStyles(styles)(PollQuestionWidget))
);
