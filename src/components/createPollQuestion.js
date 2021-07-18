/* eslint-disable no-alert, no-console, no-unused-vars*/

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { FormControl, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { createPollQuestion } from "../actions";

const styles = (theme) => ({
  container: {
    padding: theme.spacing(3),
  },
});

class CreatePollQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionText: "Would you rather?",
      option1Text: "",
      option2Text: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createPollQuestion(
      this.state.option1Text,
      this.state.option2Text
    );

    this.setState({
      option1Text: "",
      option2Text: "",
    });
  }

  render() {
    const { questionText, option1Text, option2Text } = this.state;
    const { classes } = this.props;

    return (
      <Container maxWidth={"md"}>
        <form onSubmit={this.handleSubmit} style={{ width: "50%" }}>
          <h1>{questionText}</h1>
          <FormControl margin={"normal"} fullWidth>
            <TextField
              id="option1Text"
              multiline
              rows={4}
              variant="outlined"
              label="Option 1"
              value={option1Text}
              onChange={this.handleChange}
            />
          </FormControl>

          <FormControl margin={"normal"} fullWidth>
            <TextField
              id="option2Text"
              multiline
              rows={4}
              variant="outlined"
              label="Option 2"
              value={option2Text}
              onChange={this.handleChange}
            />
          </FormControl>

          <FormControl margin={"normal"} fullWidth={true}>
            <Button variant={"contained"} color={"primary"} type={"submit"}>
              Submit
            </Button>
          </FormControl>
        </form>
      </Container>
    );
  }
}

CreatePollQuestion.propTypes = {
  classes: PropTypes.object.isRequired,
  createPollQuestion: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPollQuestion: (optOne, optTwo) =>
      dispatch(createPollQuestion(optOne, optTwo)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(CreatePollQuestion));
