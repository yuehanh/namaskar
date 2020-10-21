import { connect } from "react-redux";

import { createProject } from "../../actions/project_actions";
import { fetchWorkspace } from "../../actions/workspace_actions";

import {
  selectCurrentUser,
  selectHomespace,
  selectProjects,
  selectTeammates,
} from "../../reducers/selector";
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
    createProject: (workspaceId, project) =>
      dispatch(createProject(workspaceId, project)),
    fetchWorkspace: (workspaceId) => dispatch(fetchWorkspace(workspaceId)),
  };
};

export const ProjectIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);
