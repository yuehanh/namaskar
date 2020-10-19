import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login, clearErrors } from '../../actions/session_actions';
import { SessionForm } from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log In',
    navLink: <Link to="/signup" className="session-footer-button button">Try for free</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    processDemo: () => dispatch(login({
      email: "demo@email.com",
      password: "demopassword",
    }))
  };
};

export const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);