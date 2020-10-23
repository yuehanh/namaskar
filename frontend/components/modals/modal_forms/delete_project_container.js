import { connect } from "react-redux";
import { closeModal } from "../../../actions/modal_actions";
import { deleteProject } from "../../../actions/project_actions";
import { clearErrors } from "../../../actions/session_actions";

import { DeleteForm } from "./delete_form";

const mapStateToProps = (_null, ownProps) => {
  const data = ownProps.data;
  return {
    data,
    formType: "DELETE THIS PROJECT?",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (id) => dispatch(deleteProject(id)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => {
      dispatch(clearErrors());
      dispatch(closeModal());
    },
  };
};

export const DeleteProjectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteForm);
