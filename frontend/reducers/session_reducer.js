import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from "../actions/session_actions";

let _nullSession = {
  id: null,
};

export const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { id: action.payload.id });
    case LOGOUT_CURRENT_USER:
      return _nullSession;

    default:
      return state;
  }
};
