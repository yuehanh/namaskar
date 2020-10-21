import { connect } from "react-redux";
import { updateProject, deleteProject } from "../../actions/project_actions";
import {
  selectCurrentUser,
  selectHomespace,
  selectTeammates,
} from "../../reducers/selector";
import { ProjectShow } from "./project_show";

const mapStateToProps = (state, ownProps) => {
  const homespace = selectHomespace(state);
  return {
    errors: state.errors.session,
    currentUser: selectCurrentUser(state),
    teammates: selectTeammates(state, homespace.id),
    project: ownProps.location.project,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateProject: (project) => dispatch(updateProject(project)),
    deleteProject: (projectId) => dispatch(deleteProject(projectId)),
  };
};

export const ProjectShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow);
