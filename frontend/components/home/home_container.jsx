import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchWorkspace, updateWorkspace } from "../../actions/workspace_actions";
import { fetchUser, updateUser } from "../../actions/user_actions";

import { selectCurrentUser, selectHomespace, selectTeammates, selectWorkspaces } from "../../reducers/selector";

import { Home } from "./home";

const mapStateToProps = (state) => {
  const homespace = selectHomespace(state);
  const currentUser = selectCurrentUser(state);
  return {
    errors: state.errors.session,
    homespace,
    currentUser,
    homespaceId: currentUser.homespaceId,
    workspaces: selectWorkspaces(state),
    teammates: selectTeammates(state, homespace.id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchWorkspace: (workspaceId) => dispatch(fetchWorkspace(workspaceId)),
    updateWorkspace: (workspace) => dispatch(updateWorkspace(workspace)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    updateUser: (user) => dispatch(updateUser(user))
  };
};

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
