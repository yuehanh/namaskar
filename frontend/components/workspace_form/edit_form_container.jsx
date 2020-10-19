import React from 'react';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';
import { fetchWorkspace, updateWorkspace } from '../../actions/workspace_actions';
import { WorkspaceForm } from './workspace_form';

const mapStateToProps = (state, ownProps) => {
  const workspace = ownProps.location.homespace
  return {
    errors: state.errors.session,
    formType: 'Edit Workspace',
    workspace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (workspace) => dispatch(updateWorkspace(workspace)),
    clearErrors: () => dispatch(clearErrors()),
    fetchWorkspace: (workspaceId) => dispatch(fetchWorkspace(workspaceId))
  };
};

export const EditFormContainer = connect(mapStateToProps, mapDispatchToProps)(WorkspaceForm);