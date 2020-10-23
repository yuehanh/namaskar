import { connect } from "react-redux";

import { openModal } from "../../actions/modal_actions";

import { ProjectIndexItem } from "./project_index_item";

const mapStateToProps = (_null, ownProps) => {
  return {
    project: ownProps.project,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const projectId = ownProps.project.id;
  return {
    createProjectModal: () => dispatch(openModal({ type: "newProject" })),
    deleteProjectModal: () => {
      dispatch(openModal({ type: "deleteProject", data: projectId }));
    },
  };
};

export const ProjectIndexItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndexItem);
