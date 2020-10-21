import { connect } from "react-redux";
import { createProject } from "../../actions/project_actions";
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
    currentUser: selectCurrentUser(state),
    teammates: selectTeammates(state, homespace.id),
    projects: selectProjects(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (workspaceId, project) =>
      dispatch(createProject(workspaceId, project)),
  };
};

export const ProjectIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);
