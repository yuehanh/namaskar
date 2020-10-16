import { combineReducers } from "redux";
import { usersReducer } from "./users_reducer";
import { workspacesReducer } from "./workspaces_reducer";
import { userWorkspacesReducer } from "./user_workspaces_reducer";

export const entitiesReducer = combineReducers({
  users: usersReducer,
  workspaces: workspacesReducer,
  userWorkspaces: userWorkspacesReducer,
});
