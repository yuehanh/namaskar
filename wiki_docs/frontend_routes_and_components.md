# Frontend Routes
The following routes, defined in `App`, will render components between `SideBar` and `Footer`.

## Splash
+ `/`
  + `Splash`

## Auth
+ `/login`
  + `SessionForm`
+ `/signup`
  + `SessionForm`

## Workspace
+ `/workspaces/new`
    + `WorkspaceForm`
+ `/:workspaceId/overview`
  + `ProjectIndex`
    + `ProjectIndexItem`
  + `UserIndex`
    + `UserIndexItem`

## Project
+ `/:workspaceId/projects/new`
  + `ProjectForm`
+ `/:workspaceId/projects/edit`
  + `ProjectForm`
+ `/:workspaceId/:projectId`
  + `ProjectShow`
    + `TaskIndex`
      + `TaskIndexItem`

## User
+ `/:userId`
  + `UserShow`
    + `TaskIndex`
      + `TaskIndexItem`
+ `/:userId/edit`
  + `UserForm`



## Task
The following routes, defined in `TaskIndex`, will render components between `SideBar` and `Footer`.

+ `/:workspaceId/:userId/:taskId`
  + `TaskShow`
+ `/:workspaceId/:projectId/:taskId/edit`
  + `TaskForm`