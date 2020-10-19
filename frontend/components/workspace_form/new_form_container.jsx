import { connect } from 'react-redux';
import React from 'react';
import { clearErrors } from '../../actions/session_actions';
import { WorkspaceForm } from './workspace_form';
import { createWorkspace } from '../../actions/workspace_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Create New Workspace',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(createWorkspace(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(WorkspaceForm);