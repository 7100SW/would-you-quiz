import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { Badge } from "@material-ui/core";

const styles = () => ({
  grid: {
    maxWidth: 640,
    border: "1px solid black",
    alignItems: "center",
    justify: "space-between",
  },
  gridItem: {
    border: "0px solid black",
    width: "100%",
  },
  badge: {
    fontSize: 18,
    padding: "1em",
  },
});

class TotalScoreWidget extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { totalScore: score, classes } = this.props;

    return (
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        className={classes.grid}
      >
        <Grid item className={classes.gridItem}>
          <div style={{ fontWeight: "bold" }}>Total Score</div>
        </Grid>
        <Grid
          item
          container
          className={classes.gridItem}
          style={{
            height: "80px",
            display: "flex",
            direction: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Badge
            badgeContent={score}
            color="primary"
            classes={{ badge: classes.badge }}
          ></Badge>
        </Grid>
      </Grid>
    );
  }
}

TotalScoreWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  totalScore: PropTypes.number.isRequired,
};

export default withRouter(
  connect(null, null)(withStyles(styles)(TotalScoreWidget))
);
