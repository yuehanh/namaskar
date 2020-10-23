import { connect } from "react-redux";
import { createTask, deleteTask, updateTask } from "../../actions/task_actions";
import { TaskIndexItem } from "./task_index_item";

const mapStateToProps = (state, ownProps) => {
  const projectId = ownProps.projectId;
  const task = ownProps.task;
  return {
    projectId,
    task,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTask: (task) => dispatch(createTask(task)),
    updateTask: (task) => dispatch(updateTask(task)),
    deleteTask: (taskId) => dispatch(deleteTask(taskId)),
  };
};

export const TaskIndexItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndexItem);
