/* eslint-disable */
import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import PollQuestionWidget from "./pollQuestionWidget";
import Container from "@material-ui/core/Container";

const styles = (theme) => ({
  list: {
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
});

export class HomeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTabIndex: 0,
    };
  }


  /*
  Get list of questions that has been answered by the user
   */
  getCompletedListData(questions, users, session) {
    const list = [];

    for(let key in session.user.answers) {
      const poll = questions[key];

      if(poll) {
        poll.askedBy = users[poll.author];
        poll.hasAnswer = true;
        list.push(poll);
      }
    }

    return list.sort(item => item.timestamp);
  }

  /*
  Get list of questions that user needs to answer
   */
  getPendingListData(questions, users, session) {

    const list = [];
    console.log("Current Session", session.user);
    const answers = session.user.answers;

    for(let key in questions) {
      const response = answers[key];
      if(!response) {
        const poll = questions[key];
        poll.askedBy = users[poll.author];
        poll.hasAnswer = false;
        list.push(poll);
      }
    }

    return list.sort(item => item.timestamp);
  }

  createListItems(data) {
    if(!data) {
      return null;
    }

    const list = data.map(item => {
      return (
          <li key={item.id} className={this.props.classes.list}>
            <PollQuestionWidget id={item.id} question={item}></PollQuestionWidget>
          </li>
      );
    });


    return list;
  }


  render() {
    const { classes, questions, answers, users, session } = this.props;

    const pending = this.getPendingListData(questions, users, session);
    const completed = this.getCompletedListData(questions, users, session);

    return (
      <div className={classes.root}>
        <Paper>
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            value={this.state.activeTabIndex}
            onChange={(e, v) => this.setState({ activeTabIndex: v })}
            centered
          >
            <Tab label="Pending" />
            <Tab label="Completed" />
          </Tabs>
        </Paper>

        <Container className={classes.root} maxWidth={"lg"}>

          <Box
            value={this.state.activeTabIndex}
            index={0}
            hidden={this.state.activeTabIndex !== 0}
            style={{ margin: "auto", width: "800px" }}
          >
            <ul style={{ listStyle: "none", padding: "1rem" }}>
              {this.createListItems(pending)}
            </ul>
          </Box>

          <Box
            value={this.state.activeTabIndex}
            index={1}
            hidden={this.state.activeTabIndex !== 1}
            style={{ margin: "auto", width: "800px" }}
          >
            <ul style={{ listStyle: "none", padding: "1rem" }}>
              {this.createListItems(completed)}
            </ul>
          </Box>
        </Container>
      </div>
    );
  }
}

HomeComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    answers: state.answers,
    users: state.users,
    session: state.session,
  };
};

export const Home = connect(mapStateToProps, null)(withStyles(styles)(HomeComponent));
