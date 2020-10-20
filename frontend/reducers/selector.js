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

export const selectTeammates = (state, workspacesId) => {
  const { users, userWorkspaces } = state;
  const teammates = [];
  for (pair in userWorkspaces) {
    if (pair.workspacesId === workspacesId) {
      teammates.push(users.pair.userId);
    }
  }
  return teammates ?? [];
};

export const selectProjects = (state) => {
  return Object.values(state.entities.projects);
};
