import { connect } from 'react-redux';
import React from 'react';
import { clearErrors } from '../../actions/session_actions';
import { WorkspaceForm } from './workspace_form';
import { createWorkspace } from '../../actions/workspace_actions';

const mapStateToProps = (state, ownProps) => {
  const workspace = { name: "", description: "" }
  return {
    errors: state.errors.session,
    formType: 'New Workspace',
    workspace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(createWorkspace(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export const NewFormContainer = connect(mapStateToProps, mapDispatchToProps)(WorkspaceForm);