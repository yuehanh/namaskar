import { receiveError } from "./session_actions";
import * as UserUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = (payload) => {
  return {
    type: RECEIVE_USER,
    payload,
  };
};

export const updateUser = (user) => (dispatch) => {
  return UserUtil.updateUser(user)
    .then((payload) => dispatch(receiveUser(payload)))
    .fail((payload) => {
      dispatch(receiveError(payload.responseJSON));
    });
};

export const fetchUser = (userId) => (dispatch) => {
  return UserUtil.fetchUser(userId)
    .then((payload) => dispatch(receiveUser(payload)))
    .fail((payload) => {
      return dispatch(receiveError(payload.responseJSON));
    });
};
