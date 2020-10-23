import { connect } from "react-redux";
import { closeModal } from "../../../actions/modal_actions";
import { clearErrors } from "../../../actions/session_actions";
import { deleteWorkspace } from "../../../actions/workspace_actions";

import { DeleteForm } from "./delete_form";

const mapStateToProps = (_null, ownProps) => {
  const data = ownProps.data;
  return {
    data,
    formType: "DELETE THIS WORKSPACE?",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (id) => dispatch(deleteWorkspace(id)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => {
      dispatch(clearErrors());
      dispatch(closeModal());
    },
  };
};

export const DeleteWorkspaceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteForm);
