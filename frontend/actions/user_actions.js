import { receiveError } from "./session_actions";
import * as UserUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";

export const RECEIVE_USERS_SEARCH = "RECEIVE_USERS_SEARCH";

const receiveUser = (payload) => {
  return {
    type: RECEIVE_USER,
    payload,
  };
};

const receiveUsersSearch = (payload) => {
  return {
    type: RECEIVE_USERS_SEARCH,
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

export const searchUsers = (search) => (dispatch) => {
  return UserUtil.searchUsers(search).then((payload) =>
    dispatch(receiveUsersSearch(payload))
  );
};
