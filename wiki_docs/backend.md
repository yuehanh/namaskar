# Backend Routes

## HTML

+ `GET /` `StaticPagesController#root`

## API Endpoints

### `users`
+ `GET /api/users/:id` - returns a user
+ `POST /api/users` - sign up
+ `PATCH /api/users/:id` - edit a user


### `session`
+ `POST /api/session` - log in
+ `DELETE /api/session` - log out

### `workspaces`
+ `GET /api/workspaces/:id` - returns workspace
+ `POST /api/workspaces` - create a workspace
+ `PATCH /api/workspaces/:id` - edit a workspace
+ `DELETE /api/workspaces/:id` - remove a workspace


### `projects`
+ `POST /api/workspaces/:workspace_id/projects` - create a project that belong to `:workspace_id`
+ `GET /api/projects/:id` - returns project
+ `PATCH /api/projects/:id` - edit a project
+ `DELETE /api/projects/:id` - remove a project

### `tasks`
+ `POST /api/workspaces/:workspace_id/tasks` - create a task that belong to `:workspace_id`
+ `PATCH /api/tasks/:id` - edit a task
+ `DELETE /api/tasks/:id` - remove a task
