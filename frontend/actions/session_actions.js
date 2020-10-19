import * as SessionUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = (payload) => {
  return {
    type: RECEIVE_CURRENT_USER,
    payload,
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

const receiveError = (payload) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    payload,
  };
};

export const login = (user) => (dispatch) => {
  return SessionUtil.login(user)
    .then((payload) => {
      return dispatch(receiveCurrentUser(payload));
    })
    .fail((payload) => {
      dispatch(receiveError(payload.responseJSON));
    });
};

export const logout = () => (dispatch) => {
  return SessionUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
    .fail((payload) => dispatch(receiveError(payload.responseJSON)));
};

export const signUp = (user) => (dispatch) => {
  return SessionUtil.signUp(user)
    .then((payload) => dispatch(receiveCurrentUser(payload)))
    .fail((payload) => {
      dispatch(receiveError(payload.responseJSON));
    });
};

export const clearErrors = () => (dispatch) => {
  return dispatch(receiveError({}));
};
