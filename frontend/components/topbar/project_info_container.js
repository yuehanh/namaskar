import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { updateProject } from "../../actions/project_actions";

import { TopbarInfo } from "./topbar_info";

const mapStateToProps = (state, ownProps) => {
  const info = ownProps.project;
  return {
    info,
    projects: state.entities.projects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processUpdate: (project) => dispatch(updateProject(project)),
  };
};

export const ProjectInfoContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TopbarInfo)
);
