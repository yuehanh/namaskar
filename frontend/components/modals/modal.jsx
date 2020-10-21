import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import { NewWorkpaceFormContainer } from "../workspace_form/new_workspace_form_container";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  debugger
  switch (modal) {
    case 'newWorkspace':
      component = <NewWorkpaceFormContainer />
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-modal-child" onClick={(e) => e.stopPropagation()}>
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
