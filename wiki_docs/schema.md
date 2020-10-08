# Postgres Database Schema

## `users`

| column name       | data type | details                   |
| :---------------- | :-------: | :------------------------ |
| `id`              |  integer  | not null, primary key     |
| `email`           |  string   | not null, indexed, unique |
| `fullname`        |  string   | not null, indexed         |
| `pronouns`        |  string   |                           |
| `role`            |  string   |                           |
| `team`            |  string   |                           |
| `password_digest` |  string   | not null                  |
| `session_token`   |  string   | not null, indexed, unique |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |

-   index on `fullname`
-   index on `email, unique: true`
-   index on `session_token, unique: true`

## `workspaces`

| column name   | data type | details               |
| :------------ | :-------: | :-------------------- |
| `id`          |  integer  | not null, primary key |
| `name`        |  string   | not null              |
| `description` |   text    |                       |
| `created_at`  | datetime  | not null              |
| `updated_at`  | datetime  | not null              |

## `users_workspaces` (join table)

| column name    | data type  | details                        |
| :------------- | :--------: | :----------------------------- |
| `id`           |  integer   | not null, primary key          |
| `workspace_id` | references | not null, indexed, foreign key |
| `user_id`      | references | not null, indexed, foreign key |
| `created_at`   |  datetime  | not null                       |
| `updated_at`   |  datetime  | not null                       |

-   index on `[:chirp_id, :user_id], unique: true`
-   references datatype automatically creates indices

## `projects`

| column name    | data type  | details                        |
| :------------- | :--------: | :----------------------------- |
| `id`           |  integer   | not null, primary key          |
| `name`         |   string   | not null                       |
| `description`  |    text    |                                |
| `creator_id`   | references | not null, indexed, foreign key |
| `workspace_id` | references | not null, indexed, foreign key |
| `created_at`   |  datetime  | not null                       |
| `updated_at`   |  datetime  | not null                       |

-   `creator_id` references `users` table, `foreign_key: { to_table: :users }`

## `tasks`

| column name    | data type  | details                        |
| :------------- | :--------: | :----------------------------- |
| `id`           |  integer   | not null, primary key          |
| `name`         |   string   | not null                       |
| `description`  |    text    |                                |
| `completed`    |  boolean   | not null, default: false       |
| `milestone`    |  boolean   | not null, default: false       |
| `start_date`   |  datetime  |                                |
| `end_date`     |  datetime  |                                |
| `due_date`     |  datetime  |                                |
| `creator_id`   | references | not null, indexed, foreign key |
| `workspace_id` | references | not null, indexed, foreign key |
| `assignee_id`  | references | indexed, foreign key           |
| `project_id`   | references | indexed, foreign key           |
| `created_at`   |  datetime  | not null                       |
| `updated_at`   |  datetime  | not null                       |

-   `creator_id` references `users` table, `foreign_key: { to_table: :users }`
-   `assignee_id` references `users` table, `foreign_key: { to_table: :users }`
