json.users do
  json.set! user.id do
    json.extract! user, :id, :email, :fullname, :pronouns, :role, :team
    json.homespaceId user.homespace_id
  end
end

json.workspaces do
  user.workspaces.each do |workspace|
    json.set! workspace.id do
      json.extract! workspace, :id, :name, :description
    end
  end
end

json.userWorkspaces do
  user.user_workspaces.each do |user_workspace|
    json.set! user_workspace.id do
      json.extract! user_workspace, :id
      json.userId user_workspace.user_id
      json.workspaceId user_workspace.workspace_id
    end
  end
end
