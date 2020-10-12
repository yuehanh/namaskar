import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

export const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  debugger;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState[action.payload.id] = action.payload;
      return nextState;
    default:
      return state;
  }
};
