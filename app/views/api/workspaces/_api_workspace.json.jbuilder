json.extract! api_workspace, :id, :name, :creator_id, :description, :created_at, :updated_at
json.url api_workspace_url(api_workspace, format: :json)
