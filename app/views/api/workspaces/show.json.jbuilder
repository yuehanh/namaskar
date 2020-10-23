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

if @workspace.projects.empty?
  json.projects({})
else
  json.projects do
    @workspace.projects.each do |project|
      json.set! project.id do
        json.partial! "api/projects/project", project: project
      end
    end
  end
end

if @workspace.tasks.empty?
  json.tasks({})
else
  json.tasks do
    @workspace.tasks.each do |task|
      json.set! task.id do
        json.partial! "api/tasks/task", task: task
      end
    end
  end
end
