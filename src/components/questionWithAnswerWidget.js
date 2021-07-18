import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { capitalize } from "../utils/helpers";

class QuestionWithAnswerWidgetComponent extends Component {
  render() {
    const opt1Text = capitalize(this.props.opt1Text);
    const opt2Text = capitalize(this.props.opt2Text);

    return (
      <Box style={{ padding: "0px 8px" }}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <h2>Would you rather?</h2>
          <div style={{ textAlign: "left", paddingBottom: "0.5em" }}>
            {opt1Text}
          </div>
          <div style={{ textAlign: "left", paddingBottom: "0.5em" }}>
            <h4>OR</h4>
          </div>
          <div style={{ textAlign: "left", paddingBottom: "0.5em" }}>
            {opt2Text}
          </div>
        </Box>

        <Box>
          <Button
            variant={"contained"}
            color={"primary"}
            onClick={this.props.onClick}
          >
            View Poll Results
          </Button>
        </Box>
      </Box>
    );
  }
}

QuestionWithAnswerWidgetComponent.propTypes = {
  id: PropTypes.string.isRequired,
  opt1Text: PropTypes.string.isRequired,
  opt2Text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export const QuestionWithAnswerWidget = QuestionWithAnswerWidgetComponent;
