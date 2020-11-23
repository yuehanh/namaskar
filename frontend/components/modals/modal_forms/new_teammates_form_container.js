import { connect } from "react-redux";
import { clearErrors } from "../../../actions/session_actions";
import { closeModal } from "../../../actions/modal_actions";

import { updateWorkspace } from "../../../actions/workspace_actions";
import { searchUsers } from "../../../actions/user_actions";
import { NewTeammatesForm } from "./new_teammates_form";
import { selectTeammates } from "../../../reducers/selector";

const mapStateToProps = (state, ownProps) => {
  const workspaceId = ownProps.data;
  const teammates = selectTeammates(state, workspaceId, true);
  return {
    errors: state.errors.session,
    formType: "Find Teammates",
    workspaceId,
    teammates,
    searches: state.entities.searches,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (workspace) => dispatch(updateWorkspace(workspace)),
    searchUsers: (search) => dispatch(searchUsers(search)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => {
      dispatch(clearErrors());
      dispatch(closeModal());
    },
  };
};

export const NewTeammatesFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTeammatesForm);
