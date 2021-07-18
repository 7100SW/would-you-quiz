import React, { Component } from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import { red } from "@material-ui/core/colors";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import { UserWidget } from "./userWidget";
import Grid from "@material-ui/core/Grid";
import TotalScoreWidget from "./totalScoreWidget";

// eslint-disable-next-line no-unused-vars
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

class UserStatWidget extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userStat, classes } = this.props;

    return (
      <Card className={classes.root}>
        <CardContent className={classes.container}>
          <Grid
            className={classes.root}
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            align="center"
          >
            <Grid
              item
              style={{
                flex: "1 0 auto",
              }}
            >
              <UserWidget
                id={userStat.id}
                name={userStat.name}
                avatar={userStat.avatarUrl}
              />
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              style={{ margin: "1em" }}
            />
            <Grid
              item
              style={{
                flex: "1 0 auto",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  width: "100%",
                }}
              >
                <div style={{ textAlign: "left", paddingBottom: "0.5em" }}>
                  Asks: {userStat.askedCounter}
                </div>
                <div style={{ textAlign: "left", paddingBottom: "0.5em" }}>
                  Answers: {userStat.answerCounter}
                </div>
              </Box>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              style={{ margin: "1em" }}
            />
            <Grid
              item
              style={{
                flex: "1 0 auto",
              }}
            >
              <TotalScoreWidget totalScore={userStat.score} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

UserStatWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  userStat: PropTypes.object.isRequired,
};

export default withRouter(
  connect(null, null)(withStyles(styles)(UserStatWidget))
);
