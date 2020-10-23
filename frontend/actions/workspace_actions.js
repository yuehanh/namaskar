import * as WorkspaceUtil from "../util/workspace_api_util";
import { receiveError } from "./session_actions";

export const RECEIVE_WORKSPACE = "RECEIVE_WORKSPACE";
export const DELETE_WORKSPACE = "DELETE_WORKSPACE";

export const receiveWorkspace = (payload) => {
  return {
    type: RECEIVE_WORKSPACE,
    payload,
  };
};

const destroyWorkspace = (payload) => {
  return {
    type: DELETE_WORKSPACE,
    payload,
  };
};

export const createWorkspace = (workspace) => (dispatch) => {
  return WorkspaceUtil.createWorkspace(workspace)
    .then((payload) => dispatch(receiveWorkspace(payload)))
    .fail((payload) => {
      dispatch(receiveError(payload.responseJSON));
    });
};
export const updateWorkspace = (workspace) => (dispatch) => {
  return WorkspaceUtil.updateWorkspace(workspace)
    .then((payload) => dispatch(receiveWorkspace(payload)))
    .fail((payload) => {
      dispatch(receiveError(payload.responseJSON));
    });
};
export const fetchWorkspace = (workspaceId) => (dispatch) => {
  return WorkspaceUtil.fetchWorkspace(workspaceId)
    .then((payload) => dispatch(receiveWorkspace(payload)))
    .fail((payload) => {
      return dispatch(receiveError(payload.responseJSON));
    });
};

export const deleteWorkspace = (workspaceId) => (dispatch) => {
  return WorkspaceUtil.deleteWorkspace(workspaceId)
    .then(() => dispatch(destroyWorkspace(workspaceId)))
    .fail((payload) => {
      dispatch(receiveError(payload.responseJSON));
    });
};
