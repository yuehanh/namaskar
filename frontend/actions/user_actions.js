import { receiveError } from "./session_actions";
import * as UserUtil from "../util/user_api_util";

export const RECEIVE_USER_INFO = "RECEIVE_USER_INFO";

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
