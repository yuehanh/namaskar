import { RECEIVE_USERS_SEARCH } from "../actions/user_actions";
import { RECEIVE_WORKSPACE } from "../actions/workspace_actions";

export const searchesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_WORKSPACE:
      return {};
    case RECEIVE_USERS_SEARCH:
      return Object.assign(nextState, action.payload.searches);
    default:
      return state;
  }
};
