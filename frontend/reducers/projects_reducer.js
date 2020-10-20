import { DELETE_PROJECT, RECEIVE_PROJECT } from "../actions/project_actions";
import { RECEIVE_WORKSPACE } from "../actions/workspace_actions";

export const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_WORKSPACE:
      return action.payload.projects;
    case RECEIVE_PROJECT:
      return Object.assign(nextState, action.payload.projects);
    case DELETE_PROJECT:
        delete nextState[action.payload]
        return nextState;
    default:
      return state;
  }
};
