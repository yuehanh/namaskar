import * as ProjectUtil from "../util/project_api_util";
import { receiveError } from "./session_actions";

export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";

const receiveProject = (payload) => {
  return {
    type: RECEIVE_PROJECT,
    payload,
  };
};

const destroyProject = (payload) => {
  return {
    type: DELETE_PROJECT,
    payload,
  };
};

export const createProject = (project, workspaceId) => (dispatch) => {
  return ProjectUtil.createProject(project, workspaceId)
    .then((payload) => dispatch(receiveProject(payload)))
    .fail((payload) => {
      dispatch(receiveError(payload.responseJSON));
    });
};
export const updateProject = (project) => (dispatch) => {
  return ProjectUtil.updateProject(project)
    .then((payload) => dispatch(receiveProject(payload)))
    .fail((payload) => {
      dispatch(receiveError(payload.responseJSON));
    });
};
export const fetchProject = (projectId) => (dispatch) => {
  return ProjectUtil.fetchProject(projectId)
    .then((payload) => dispatch(receiveProject(payload)))
    .fail((payload) => {
      return dispatch(receiveError(payload.responseJSON));
    });
};

export const deleteProject = (projectId) => (dispatch) => {
  return ProjectUtil.deleteProject(projectId)
    .then(() => dispatch(destroyProject(projectId)))
    .fail((payload) => {
      dispatch(receiveError(payload.responseJSON));
    });
};
