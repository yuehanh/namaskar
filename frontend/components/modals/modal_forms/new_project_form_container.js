import { connect } from "react-redux";
import { clearErrors } from "../../../actions/session_actions";
import { closeModal } from "../../../actions/modal_actions";
import { WorkspaceForm } from "./workspace_form";
import { createProject } from "../../../actions/project_actions";

import { selectCurrentUser } from "../../../reducers/selector";

const mapStateToProps = (state) => {
  const workspace = { name: "", description: "" };
  const currentUser = selectCurrentUser(state);
  return {
    errors: state.errors.session,
    formType: "New Project",
    workspace,
    homespaceId: currentUser.homespaceId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (project, workspaceId) =>
      dispatch(createProject(project, workspaceId)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => {
      dispatch(clearErrors());
      dispatch(closeModal());
    },
  };
};

export const NewProjectFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkspaceForm);
