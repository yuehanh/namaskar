import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_WORKSPACE } from "../actions/workspace_actions";

export const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = action.payload.users;
      return nextState;
    case RECEIVE_USER:
    case RECEIVE_WORKSPACE:
      return Object.assign(nextState, action.payload.users);
    default:
      return state;
  }
};
