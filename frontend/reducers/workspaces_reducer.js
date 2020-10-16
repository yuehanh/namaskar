import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

export const workspacesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = action.payload.workspaces;
      return nextState;
    default:
      return state;
  }
};
