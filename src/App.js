import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./components/loginPage";
import withAuthGuard from "./utils/withAuthGuard";
import NavBar from "./components/navBar";
import { runDataInit } from "./actions";
import { Dashboard, Home, Profile, Question } from "./components";
import CreatePollAnswer from "./components/createPollAnswer";
import CreatePollQuestion from "./components/createPollQuestion";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(runDataInit());
  }

  routerSwitch() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path={"/login"} component={LoginPage} />
          <Route exact path={"/home"} component={withAuthGuard(Home)} />
          <Route exact path={"/question"} component={withAuthGuard(Question)} />
          <Route
            exact
            path={"/question/create"}
            component={withAuthGuard(CreatePollQuestion)}
          />
          <Route
            exact
            path={"/question/answer/:id"}
            component={withAuthGuard(CreatePollAnswer)}
          />
          <Route
            exact
            path={"/dashboard"}
            component={withAuthGuard(Dashboard)}
          />
          <Route exact path={"/profile"} component={withAuthGuard(Profile)} />
          <Route exact path={"/"} component={withAuthGuard(Home)} />
        </Switch>
      </Router>
    );
  }

  render() {
    return (
      <div className="App">
        <LoadingBar />
        {this.routerSwitch()}
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
};

export default connect(null)(App);
