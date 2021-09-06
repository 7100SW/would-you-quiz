import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MuiAlert from "@material-ui/lab/Alert";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { login } from "../actions";
import { Redirect } from "react-router-dom";

const styles = (theme) => ({
  container: {
    padding: theme.spacing(3),
  },
});

function Alert(props) {
  return <MuiAlert elevation={6} variant={"filled"} {...props} />;
}

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        userid: "johndoe", // Note: hardcoded default to make testing faster
        password: "P@ssw0rd!", // Note: hardcoded default to make testing faster
      },
      error: null,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setError(null);

    const field = e.target;
    const cred = this.state.credentials;
    cred[field.name] = e.target.value;

    return this.setState({ credentials: cred });
  }

  onSubmit(e) {
    e.preventDefault();

    const cred = this.state.credentials;
    console.log("onSubmit", cred);

    if (cred.userid === "" || cred.password === "") {
      this.setError("Input values are required");
      return;
    }

    this.props.login(cred.userid, cred.password);
  }

  setError(error) {
    this.setState((prev) => {
      return {
        ...prev,
        error: error,
      };
    });
  }

  render() {
    const { classes, session } = this.props;
    if (session.authenticated) {
      return <Redirect to={"/"} />;
    }

    return (
      <Container className={classes.container} maxWidth={"xs"}>
        <form onSubmit={this.onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth={true}
                    label={"User Id"}
                    name={"userid"}
                    size={"small"}
                    variant={"outlined"}
                    value={this.state.credentials.userid}
                    onChange={this.onChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    size="small"
                    type="password"
                    variant="outlined"
                    value={this.state.credentials.password}
                    onChange={this.onChange}
                  />
                </Grid>
              </Grid>
            </Grid>

            {this.state.error && (
              <Grid item xs={12}>
                <Alert severity="error" onClick={() => this.setError(null)}>
                  {this.state.error}
                </Alert>
              </Grid>
            )}

            <Grid item xs={12}>
              <Button
                color="secondary"
                fullWidth
                type="submit"
                variant="contained"
              >
                Log in
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  session: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    session: state.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (id, pwd) => dispatch(login(id, pwd)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LoginPage));
