import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import {
  DELETE_WORKSPACE,
  RECEIVE_WORKSPACE,
} from "../actions/workspace_actions";

export const workspacesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.payload.workspaces;
    case RECEIVE_WORKSPACE:
      return Object.assign(nextState, action.payload.workspaces);
    case DELETE_WORKSPACE:
      delete nextState[action.payload];
      return nextState;
    default:
      return state;
  }
};
