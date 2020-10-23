json.extract! task, :id, :name, :description, :completed, :milestone, :start_date, :end_date, :due_date, :creator_id, :workspace_id, :assignee_id, :project_id, :created_at, :updated_at
json.url task_url(task, format: :json)
