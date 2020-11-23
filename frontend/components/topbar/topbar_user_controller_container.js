import { connect } from "react-redux";

import { logout } from "../../actions/session_actions";
import {
  deleteWorkspace,
  fetchWorkspace,
} from "../../actions/workspace_actions";
import { updateUser } from "../../actions/user_actions";
import { openModal } from "../../actions/modal_actions";

import {
  selectCurrentUser,
  selectHomespace,
  selectWorkspaces,
} from "../../reducers/selector";

import { TopbarUserController } from "./topbar_user_controller";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  const homespace = selectHomespace(state);

  return {
    homespace,
    currentUser: selectCurrentUser(state),
    workspaces: selectWorkspaces(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
    fetchWorkspace: (workspaceId) => dispatch(fetchWorkspace(workspaceId)),
    updateUser: (user) => dispatch(updateUser(user)),
    createWorkspaceModal: () => dispatch(openModal({ type: "newWorkspace" })),
    deleteWorkspace: (id) => dispatch(deleteWorkspace(id)),
    deleteWorkspaceModal: (workspaceId) => {
      dispatch(openModal({ type: "deleteWorkspace", data: workspaceId }));
    },
    updateUserModal: (user) => {
      dispatch(openModal({ type: "editUser", data: user }));
    },
  };
};

export const UserControllerContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TopbarUserController)
);
