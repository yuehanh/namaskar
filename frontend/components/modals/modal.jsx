import React from "react";
import { connect } from "react-redux";

import { closeModal } from "../../actions/modal_actions";

import { UserProfileFormContainer } from "./modal_forms/user_profile_form_container";
import { NewProjectFormContainer } from "./modal_forms/new_project_form_container";
import { DeleteProjectContainer } from "./modal_forms/delete_project_container";
import { DeleteWorkspaceContainer } from "./modal_forms/delete_workspace_container";
import { NewTeammatesFormContainer } from "./modal_forms/new_teammates_form_container";
import { NewWorkpaceFormContainer } from "./modal_forms/new_workspace_form_container";
function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.type) {
    case "newWorkspace":
      component = <NewWorkpaceFormContainer />;
      break;
    case "newProject":
      component = <NewProjectFormContainer />;
      break;
    case "deleteProject":
      component = <DeleteProjectContainer data={modal.data} />;
      break;
    case "deleteWorkspace":
      component = <DeleteWorkspaceContainer data={modal.data} />;
      break;
    case "addTeamates":
      component = <NewTeammatesFormContainer data={modal.data} />;
      break;
    case "editUser":
      component = <UserProfileFormContainer data={modal.data} />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
