import { connect } from "react-redux";
import { updateWorkspace } from "../../actions/workspace_actions";

import {
  selectCurrentUser,
  selectHomespace,
  selectTeammates,
} from "../../reducers/selector";
import { UserIndex } from "./user_index";

const mapStateToProps = (state) => {
  const homespace = selectHomespace(state);
  return {
    currentUser: selectCurrentUser(state),
    teammates: selectTeammates(state, homespace.id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateWorkspace: (workspace) => dispatch(updateWorkspace(workspace)),
  };
};

export const UserIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserIndex);
