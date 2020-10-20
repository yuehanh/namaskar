json.workspaces do
  json.set! @workspace.id do
    json.partial! "api/workspaces/workspace", workspace: @workspace
  end
end

json.users do
  @workspace.users.each do |user|
    json.set! user.id do
      json.partial! "api/users/user", user: user
    end
  end
end

json.userWorkspaces do
  @workspace.user_workspaces.each do |user_workspace|
    json.set! user_workspace.id do
      json.partial! "api/user_workspaces/user_workspace", user_workspace: user_workspace
    end
  end
end

json.projects do
  @workspace.projects.each do |project|
    json.set! project.id do
      json.partial! "api/projects/project", project: project
    end
  end
end
