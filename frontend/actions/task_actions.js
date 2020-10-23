import * as TaskUtil from "../util/task_api_util";
import { receiveError } from "./session_actions";
import { receiveWorkspace } from "./workspace_actions";

export const DELETE_TASK = "DELETE_PROJECT";

const destroyTask = (payload) => {
  return {
    type: DELETE_TASK,
    payload,
  };
};

export const createTask = (task) => (dispatch) => {
  return TaskUtil.createTask(task)
    .then((payload) => dispatch(receiveWorkspace(payload)))
    .fail((payload) => {
      dispatch(receiveError(payload.responseJSON));
    });
};
export const updateTask = (task) => (dispatch) => {
  return TaskUtil.updateTask(task)
    .then((payload) => dispatch(receiveWorkspace(payload)))
    .fail((payload) => {
      dispatch(receiveError(payload.responseJSON));
    });
};

export const deleteTask = (taskId) => (dispatch) => {
  return TaskUtil.deleteTask(taskId)
    .then(() => dispatch(destroyTask(taskId)))
    .fail((payload) => {
      dispatch(receiveError(payload.responseJSON));
    });
};
