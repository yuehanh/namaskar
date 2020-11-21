import { DELETE_TASK, RECEIVE_TASK } from "../actions/task_actions";
import { RECEIVE_WORKSPACE } from "../actions/workspace_actions";

export const tasksReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_WORKSPACE:
      return action.payload.tasks;
    case RECEIVE_TASK:
      debugger;
      return Object.assign(nextState, action.payload.tasks);
    case DELETE_TASK:
      delete nextState[action.payload];
      return nextState;
    default:
      return state;
  }
};
