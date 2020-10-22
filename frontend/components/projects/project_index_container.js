import { connect } from "react-redux";

import { createProject } from "../../actions/project_actions";
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
    createProject: (workspaceId, project) =>
      dispatch(createProject(workspaceId, project)),
    fetchWorkspace: (workspaceId) => dispatch(fetchWorkspace(workspaceId)),
    createProjectModal: () => dispatch(openModal("newProject")),
  };
};

export const ProjectIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);
