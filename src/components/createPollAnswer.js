/* eslint-disable no-alert, no-console, no-unused-vars*/

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { red } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { capitalize } from "../utils/helpers";
import { addUserAnswer } from "../actions";

const styles = (theme) => ({
  root: {
    maxWidth: 640,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  container: {
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "row",
  },
});

class CreatePollAnswer extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);

    this.state = {
      answer: "optionOne",
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.addUserAnswer(this.props.question.id, this.state.answer);
    this.props.history.push(`/home`);
  }

  handleAnswerChange(e) {
    e.preventDefault();

    this.setState({
      answer: e.target.value,
    });
  }

  render() {
    const { question } = this.props;
    const option1Text = capitalize(question.optionOne.text);
    const option2Text = capitalize(question.optionTwo.text);
    const author = question.askedBy;

    return (
      <div>
        <Container maxWidth={"md"}>
          <form onSubmit={this.handleSubmit} style={{ width: "50%" }}>
            <h1>Would you rather?</h1>
            <h4>Asked By: {author.name}</h4>
            <RadioGroup
              name={"answer"}
              value={this.state.answer}
              onChange={this.handleAnswerChange}
            >
              <FormControlLabel
                control={<Radio />}
                label={option1Text}
                value={"optionOne"}
              />
              <FormControlLabel
                control={<Radio />}
                label={option2Text}
                value={"optionTwo"}
              />
            </RadioGroup>
            <FormControl margin={"normal"} fullWidth={true}>
              <Button variant={"contained"} color={"primary"} type={"submit"}>
                Submit
              </Button>
            </FormControl>
          </form>
        </Container>
      </div>
    );
  }
}

CreatePollAnswer.propTypes = {
  classes: PropTypes.object.isRequired,
  question: PropTypes.object.isRequired,
  addUserAnswer: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUserAnswer: (questionId, answer) =>
      dispatch(addUserAnswer(questionId, answer)),
  };
};

function mapStateToProps(state, props) {
  const { id } = props.match.params;

  return {
    id,
    question: state.questions[id],
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(CreatePollAnswer))
);
