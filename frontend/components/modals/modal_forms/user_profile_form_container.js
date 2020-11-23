import { connect } from "react-redux";
import { clearErrors } from "../../../actions/session_actions";
import { closeModal } from "../../../actions/modal_actions";

import { updateUser } from "../../../actions/user_actions";
import { UserProfileForm } from "./user_profile_form";
const mapStateToProps = (state, ownProps) => {
  const user = ownProps.data;
  return {
    errors: state.errors.session,
    formType: "My Profile Settings",
    user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(updateUser(user)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => {
      dispatch(clearErrors());
      dispatch(closeModal());
    },
  };
};

export const UserProfileFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileForm);
