import { connect } from "react-redux";

import { logout } from "../../actions/session_actions";
import { fetchWorkspace } from "../../actions/workspace_actions";
import { updateUser } from "../../actions/user_actions";

import {
  selectCurrentUser,
  selectHomespace,
  selectWorkspaces,
} from "../../reducers/selector";

import { TopbarUserController } from "./topbar_user_controller";

const mapStateToProps = (state) => {
  const homespace = selectHomespace(state);

  return {
    homespace,
    currentUser: selectCurrentUser(state),
    workspaces: selectWorkspaces(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchWorkspace: (workspaceId) => dispatch(fetchWorkspace(workspaceId)),
    updateUser: (user) => dispatch(updateUser(user)),
  };
};

export const UserControllerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopbarUserController);
