import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from "../actions/session_actions";

let _nullSession = {
  currentUserId: null,
};

export const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { currentUserId: Object.keys(action.payload.users)[0] });
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};
