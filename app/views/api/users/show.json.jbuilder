json.users do
  json.set! @user.id do
    json.partial! "api/users/user", user: @user
  end
end

json.workspaces do
  @user.workspaces.each do |workspace|
    json.set! workspace.id do
      json.extract! workspace, :id, :name
    end
  end
end

json.userWorkspaces do
  @user.user_workspaces.each do |user_workspace|
    json.set! user_workspace.id do
      json.partial! "api/user_workspaces/user_workspace", user_workspace: user_workspace
    end
  end
end
