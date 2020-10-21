import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ path, loggedIn, exact, component: Component }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to="/home" />
      )
  )} />
);

const Protected = ({ path, loggedIn, exact, component: Component }) => (
  <Route path={path} exact={exact} render={(props) => {
    return loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to="/login" />
      )
    }} />
);

const mapStateToProps = state => (
  { loggedIn: Boolean(state.session.currentUserId) }
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));