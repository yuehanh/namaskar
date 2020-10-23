import { connect } from "react-redux";

import { fetchWorkspace } from "../../actions/workspace_actions";
import { openModal } from "../../actions/modal_actions";

import { selectHomespace, selectProjects } from "../../reducers/selector";
import { ProjectIndex } from "./project_index";

const mapStateToProps = (state) => {
  const homespace = selectHomespace(state);
  return {
    homespaceId: homespace.id,
    projects: selectProjects(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWorkspace: (workspaceId) => dispatch(fetchWorkspace(workspaceId)),
  };
};

export const ProjectIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);
