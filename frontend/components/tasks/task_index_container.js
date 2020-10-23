import { connect } from "react-redux";
import { createTask, deleteTask, updateTask } from "../../actions/task_actions";
import { selectTasks } from "../../reducers/selector";
import { TaskIndex } from "./task_index";

const mapStateToProps = (state, ownProps) => {
  debugger;
  const projectId = ownProps.match.params.projectId;
  return {
    projectId,
    tasks: selectTasks(state, projectId),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTask: (task) => dispatch(createTask(task)),
    deleteTask: (taskId) => dispatch(deleteTask(taskId)),
  };
};

export const TaskIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndex);
