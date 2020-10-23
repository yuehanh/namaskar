json.extract! task, :id, :name, :description, :completed, :milestone
json.startDate task.start_date
json.endDate task.end_date
json.dueDate task.due_date
json.creatorId task.creator_id
json.workspaceId task.workspace_id
json.assigneeId task.assignee_id
json.projectId task.project_id
