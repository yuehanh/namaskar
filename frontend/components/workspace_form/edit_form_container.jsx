import React from 'react';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';
import { updateWorkspace } from '../../actions/workspace_actions';
import { WorkspaceForm } from './workspace_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Edit_Form',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(updateWorkspace(user)),
    clearErrors: () => dispatch(clearErrors()),

  };
};

export const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(WorkspaceForm);