# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_23_072454) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "projects", force: :cascade do |t|
    t.string "name", null: false
    t.string "description"
    t.bigint "lead_id", null: false
    t.bigint "workspace_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["lead_id"], name: "index_projects_on_lead_id"
    t.index ["workspace_id"], name: "index_projects_on_workspace_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.boolean "completed", default: false, null: false
    t.boolean "milestone", default: false, null: false
    t.datetime "start_date"
    t.datetime "end_date"
    t.datetime "due_date"
    t.bigint "creator_id", null: false
    t.bigint "workspace_id", null: false
    t.bigint "assignee_id"
    t.bigint "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["assignee_id"], name: "index_tasks_on_assignee_id"
    t.index ["creator_id"], name: "index_tasks_on_creator_id"
    t.index ["project_id"], name: "index_tasks_on_project_id"
    t.index ["workspace_id"], name: "index_tasks_on_workspace_id"
  end

  create_table "user_workspaces", force: :cascade do |t|
    t.bigint "workspace_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "workspace_id"], name: "index_user_workspaces_on_user_id_and_workspace_id", unique: true
    t.index ["user_id"], name: "index_user_workspaces_on_user_id"
    t.index ["workspace_id"], name: "index_user_workspaces_on_workspace_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "fullname"
    t.string "pronouns"
    t.string "role"
    t.string "team"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "homespace_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["fullname"], name: "index_users_on_fullname"
    t.index ["homespace_id"], name: "index_users_on_homespace_id"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  create_table "workspaces", force: :cascade do |t|
    t.string "name", default: "My Workspace", null: false
    t.bigint "owner_id", null: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_workspaces_on_owner_id"
  end

  add_foreign_key "workspaces", "users", column: "owner_id", on_delete: :cascade
end
