import React from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";

import { SignupFormContainer } from './session_form/signup_form_container';
import { LoginFormContainer } from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

export const App = () => (
  <div>
    <h1>Namaskar</h1>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);