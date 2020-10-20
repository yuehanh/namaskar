import { connect } from "react-redux";
import { updateWorkspace } from "../../actions/workspace_actions";
import { selectCurrentUser, selectHomespace, selectTeammates } from "../../reducers/selector";
import { WorkspaceInfo } from "./workspace_info";


const mapStateToProps = (state) => {
  const homespace = selectHomespace(state);
  return {
    errors: state.errors.session,
    workspace: homespace,
    currentUser: selectCurrentUser(state),
    teammates: selectTeammates(state, homespace.id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateWorkspace: (workspace) => dispatch(updateWorkspace(workspace)),
  };
};

export const WorkspaceInfoContainer = connect(mapStateToProps, mapDispatchToProps)(WorkspaceInfo);
