import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import PollAnswerWidget from "./pollAnswerWidget";

const styles = (theme) => ({
  list: {
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
});

export class QuestionDetailComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { question, answers } = this.props;
    if (question.hasAnswer) {
      return <PollAnswerWidget question={question} answers={answers} />;
    } 

    return <h2>Question Details with No Answer</h2>;
  }
}

QuestionDetailComponent.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.object,
  answers: PropTypes.object,
};

const mapDispatchToProps = () => ({});

function mapStateToProps(state, props) {
  const { id } = props.match.params;

  return {
    id,
    question: state.questions[id],
    answers: state.answers[id],
  };
}

export const QuestionDetail = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(QuestionDetailComponent))
);
