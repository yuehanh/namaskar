import React from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import { SplashContainer } from './splash/splash_container';
import { HomeContainer } from './home/home_container';
import { SignupFormContainer } from './session_form/signup_form_container';
import { LoginFormContainer } from './session_form/login_form_container';
import { NewFormContainer } from './workspace_form/new_form_container'
import { EditFormContainer } from './workspace_form/edit_form_container'

export const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={SplashContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/workspaces/new" component={NewFormContainer} />
      <ProtectedRoute exact path="/workspaces/edit" component={EditFormContainer} />
      <ProtectedRoute exact path="/home" component={HomeContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);