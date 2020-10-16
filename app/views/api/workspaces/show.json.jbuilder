json.workspace do
  json.partial! "api/workspaces/workspace", workspace: @workspace
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
      json.extract! user_workspace, :id, :user_id, :workspace_id
    end
  end
end
