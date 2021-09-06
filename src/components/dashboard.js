import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import UserStatWidget from "./userStatWidget";

const styles = (theme) => ({
  listItem: {
    padding: theme.spacing(3),
    listStyle: "none",
  },
  list: {
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
});

class DashboardComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  calcUserStats(pairs) {
    const list = [];

    for (const [, user] of Object.entries(pairs)) {
      const userScore = {
        ...user,
        askedCounter: 0,
        answerCounter: 0,
        score: 0,
      };

      if (user.questions) {
        userScore.askedCounter = user.questions.length;
      }

      if (user.answers) {
        userScore.answerCounter = Object.values(user.answers).length;
      }

      userScore.score = userScore.askedCounter + userScore.answerCounter;
      list.push(userScore);
    }

    return list.sort((item) => item.score);
  }

  render() {
    const { users, classes } = this.props;
    if (!users) {
      return null;
    }
    const scores = this.calcUserStats(users);

    return (
      <Container className={classes.root} maxWidth={"md"}>
        <ul className={classes.list}>
          {scores.map((user) => {
            return (
              <li key={user.id} className={classes.listItem}>
                <UserStatWidget userStat={user} />
              </li>
            );
          })}
        </ul>
      </Container>
    );
  }
}

DashboardComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  users: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    session: state.session,
  };
};

export const Dashboard = connect(
  mapStateToProps,
  null
)(withStyles(styles)(DashboardComponent));
