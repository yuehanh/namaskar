import { combineReducers } from "redux";
import { usersReducer } from "./users_reducer";
import { workspacesReducer } from "./workspaces_reducer";
import { userWorkspacesReducer } from "./user_workspaces_reducer";
import { projectsReducer } from "./projects_reducer";
import { tasksReducer } from "./tasks_reducer";
import { searchesReducer } from "./search_reducer";

export const entitiesReducer = combineReducers({
  users: usersReducer,
  workspaces: workspacesReducer,
  userWorkspaces: userWorkspacesReducer,
  projects: projectsReducer,
  tasks: tasksReducer,
  searches: searchesReducer,
});
