import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_WORKSPACE } from "../actions/workspace_actions";
import { RECEIVE_USER } from "../actions/user_actions";

export const userWorkspacesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_WORKSPACE:
      nextState = action.payload.userWorkspaces;
      return nextState;
    case RECEIVE_USER:
      return Object.assign(nextState, action.payload.userWorkspaces);
    default:
      return state;
  }
};
