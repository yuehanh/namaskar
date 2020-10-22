import React from "react";
import { connect } from "react-redux";

import { closeModal } from "../../actions/modal_actions";

import { NewWorkpaceFormContainer } from "./modal_forms/new_workspace_form_container"
import { NewProjectFormContainer } from "./modal_forms/new_project_form_container";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'newWorkspace':
      component = <NewWorkpaceFormContainer />
      break;
    case 'newProject':
      component = <NewProjectFormContainer />
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

export const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);
