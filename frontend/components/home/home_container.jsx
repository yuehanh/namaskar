import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchWorkspace } from "../../actions/workspace_actions";
import { fetchUser } from "../../actions/user_actions";

import { selectCurrentUser, selectHomespace, selectTeammates, selectWorkspaces } from "../../reducers/selector";

import { Home } from "./home";

const mapStateToProps = (state) => {
  const homespace = selectHomespace(state);

  return {
    errors: state.errors.session,
    homespace,
    currentUser: selectCurrentUser(state),
    workspaces: selectWorkspaces(state),
    teammate: selectTeammates(state, homespace.id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchWorkspace: (workspaceId) => dispatch(fetchWorkspace(workspaceId)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
  };
};

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
