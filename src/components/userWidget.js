import React, { Component } from "react";
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
  avatar: {
    backgroundColor: "orange",
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
});

class UserWidgetComponent extends Component {
  render() {
    const { classes, name } = this.props;
    const avatarUrl =
      this.props.avatarUrl ||
      "https://gravatar.com/avatar/8379704d3e414a488c367763356476c6?s=600&d=robohash&r=x";

    return (
      <div className={classes.container} style={{ width: "160px" }}>
        <Avatar src={avatarUrl} className={classes.avatar} />
        <div
          style={{
            padding: "0.5rem",
          }}
        >
          <div>{name}</div>
        </div>
      </div>
    );
  }
}

UserWidgetComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string,
};

export const UserWidget = withStyles(styles)(UserWidgetComponent);
