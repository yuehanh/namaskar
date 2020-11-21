import * as TaskUtil from "../util/task_api_util";
import { receiveError } from "./session_actions";

export const DELETE_TASK = "DELETE_TASK";
export const RECEIVE_TASK = "RECEIVE_TASK";

const receiveTask = (payload) => {
  return {
    type: RECEIVE_TASK,
    payload,
  };
};

const destroyTask = (payload) => {
  return {
    type: DELETE_TASK,
    payload,
  };
};

export const createTask = (task) => (dispatch) => {
  return TaskUtil.createTask(task)
    .then((payload) => dispatch(receiveTask(payload)))
    .fail((payload) => {
      dispatch(receiveError(payload.responseJSON));
    });
};
export const updateTask = (task) => (dispatch) => {
  return TaskUtil.updateTask(task)
    .then((payload) => dispatch(receiveTask(payload)))
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
