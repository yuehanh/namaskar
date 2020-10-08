# Backend Routes

## HTML

+ `GET /` `StaticPagesController#root`

## API Endpoints

### `users`
+ `GET /api/users/:id` - returns a user
+ `EDIT /api/users/:id` - returns a user
+ `POST /api/users` - sign up
+ `GET /api/workspaces/:workspace_id/users` - returns all user that belongs to `:workspace_id`

### `session`
+ `POST /api/session` - log in
+ `DELETE /api/session` - log out

### `workspaces`
+ `GET /api/workspaces` - returns all cuurent user's workspaces
+ `POST /api/workspaces` - create a workspace
+ `GET /api/workspaces/:id` - returns workspace
+ `PATCH /api/workspaces/:id` - edit a workspace
+ `DELETE /api/workspaces/:id` - remove a workspace


### `projects`
+ `GET /api/workspaces/:workspace_id/projects` - returns all projects that belong to `:workspace_id` 
+ `POST /api/workspaces/:workspace_id/projects` - create a project that belong to `:workspace_id`
+ `GET /api/workspaces/:workspace_id/projects/:id` - returns project
+ `PATCH /api/workspaces/:workspace_id/projects/:id` - edit a project
+ `DELETE /api/workspaces/:workspace_id/projects/:id` - remove a project

### `tasks`
+ `GET /api/workspaces/:workspace_id/tasks` - returns all tasks that belong to `:workspace_id`
+ `POST /api/workspaces/:workspace_id/tasks` - create a task that belong to `:workspace_id`
+ `GET /api/workspaces/:workspace_id/tasks/:id` - returns task
+ `PATCH /api/workspaces/:workspace_id/tasks/:id` - edit a task
+ `DELETE /api/workspaces/:workspace_id/tasks/:id` - remove a task
