import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";

import { signUp, clearErrors, login } from "../../actions/session_actions";
import { SessionForm } from "./session_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Sign Up",
    navLink: (
      <Link to="/login" className="session-footer-button button">
        Log In
      </Link>
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signUp(user)),
    clearErrors: () => dispatch(clearErrors()),
    processDemo: () =>
      dispatch(
        login({
          email: "demo@email.com",
          password: "demopassword",
        })
      ),
  };
};

export const SignupFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
