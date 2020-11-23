export const selectCurrentUser = (state) => {
  return state.entities.users[state.session.currentUserId];
};

export const selectHomespace = (state) => {
  const currentUser = state.entities.users[state.session.currentUserId];
  const homespace = state.entities.workspaces[currentUser.homespaceId] ?? "";
  return homespace;
};

export const selectWorkspaces = (state) => {
  return Object.values(state.entities.workspaces);
};

export const selectTeammates = (state, workspacesId, set) => {
  const { users, userWorkspaces } = state.entities;
  const teammates = [];
  const teammatesSet = new Set();
  const pairs = Object.values(userWorkspaces);
  const id = workspacesId;
  pairs.forEach((pair) => {
    if (pair.workspaceId === id) {
      teammates.push(users[pair.userId]);
      teammatesSet.add(pair.userId);
    }
  });
  return set ? teammatesSet : teammates;
};

export const selectProjects = (state) => {
  return Object.values(state.entities.projects);
};

export const selectTasks = (state, projectId) => {
  const allTasks = Object.values(state.entities.tasks);
  if (projectId) {
    //  Use double equal here since projectId is a string
    return allTasks.filter((task) => task.projectId == projectId);
  }
  return allTasks;
};
