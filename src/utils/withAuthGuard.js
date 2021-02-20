// The following code is a derivative work of the code from a blog article
// published here:
// https://www.codementor.io/@sahilmittal/using-higher-order-components-for-authenticated-routing-i1hcp6pc6

import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const withAuthGuard = (ComposedComponent) => {
  class Authenticate extends React.Component {
    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate() {
      this._checkAndRedirect();
    }

    _checkAndRedirect() {
      const { isAuthenticated } = this.props;

      if (!isAuthenticated) {
        this.props.history.push("/login");
      }
    }

    render() {
      return (
        <div>
          {this.props.isAuthenticated ? (
            <ComposedComponent {...this.props} />
          ) : null}
        </div>
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired,
  };

  const mapStateToProps = ({ session }) => ({
    isAuthenticated: session.authenticated,
  });

  return withRouter(connect(mapStateToProps)(Authenticate));
};

export default withAuthGuard;
