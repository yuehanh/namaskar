export const createProject = (workspaceId, project) =>
  $.ajax({
    url: `api/workspaces/${workspaceId}/projects/`,
    method: "POST",
    data: { project },
  });

export const updateProject = (project) =>
  $.ajax({
    url: `api/projects/${project.id}`,
    method: "PATCH",
    data: { project },
  });

export const fetchProject = (projectId) =>
  $.ajax({
    url: `api/projects/${projectId}`,
    method: "GET",
  });

export const deleteProject = (projectId) =>
  $.ajax({
    url: `api/projects/${projectId}`,
    method: "DELETE",
  });
