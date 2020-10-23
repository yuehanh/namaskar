class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :name, null: false
      t.text :description
      t.boolean :completed, default: false, null: false
      t.boolean :milestone, default: false, null: false
      t.datetime :start_date
      t.datetime :end_date
      t.datetime :due_date
      t.references :creator, references: :users, null: false
      t.references :workspace, null: false
      t.references :assignee, references: :users
      t.references :project

      t.timestamps
    end
  end
end
