import { connect } from "react-redux";
import { clearErrors } from "../../../actions/session_actions";
import { createWorkspace } from "../../../actions/workspace_actions";
import { closeModal } from "../../../actions/modal_actions";

import { WorkspaceForm } from "./workspace_form";

const mapStateToProps = (state) => {
  const workspace = { name: "", description: "" };
  return {
    errors: state.errors.session,
    formType: "New Workspace",
    workspace,
    homespaceId: null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(createWorkspace(user)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => {
      dispatch(clearErrors());
      dispatch(closeModal());
    },
  };
};

export const NewWorkpaceFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkspaceForm);
