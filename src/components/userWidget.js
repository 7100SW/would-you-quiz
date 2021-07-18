import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const styles = (theme) => ({
  container: {
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 16,
    backgroundColor: "lightGray",
  },
});

class UserWidgetComponent extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container} style={{ width: "160px" }}>
        <Avatar src={this.props.avatarUrl} />
        <div
          style={{
            padding: "0.5rem",
          }}
        >
          <div>{this.props.name}</div>
        </div>
      </div>
    );
  }
}

UserWidgetComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export const UserWidget = connect(
  null,
  null
)(withStyles(styles)(UserWidgetComponent));
