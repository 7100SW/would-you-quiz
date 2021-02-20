import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Question, Dashboard, Profile } from "./components";
import LoginPage from "./components/LoginPage";
import { connect } from "react-redux";
import withAuthGuard from "./utils/withAuthGuard";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path={"/login"} component={LoginPage} />
          <Route exact path={"/home"} component={withAuthGuard(Home)} />
          <Route exact path={"/question"} component={withAuthGuard(Question)} />
          <Route
            exact
            path={"/dashboard"}
            component={withAuthGuard(Dashboard)}
          />
          <Route exact path={"/profile"} component={withAuthGuard(Profile)} />
          <Route exact path={"/"} component={withAuthGuard(Home)} />
        </Switch>
      </Router>
    </div>
  );
}

export default connect()(App);
