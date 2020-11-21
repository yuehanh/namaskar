json.projects do
  json.set! @project.id do
    json.partial! "api/projects/project", project: @project
  end
end

if @project.tasks.empty?
  json.tasks({})
else
  json.tasks do
    @project.tasks.each do |task|
      json.set! task.id do
        json.partial! "api/tasks/task", task: task
      end
    end
  end
end
