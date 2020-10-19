class CreateUserWorkspaces < ActiveRecord::Migration[5.2]
  def change
    create_table :user_workspaces do |t|
      t.references :workspace, foreign_key: false, null: false
      t.references :user, foreign_key: false, null: false
      t.timestamps
    end
    add_index :user_workspaces, [:user_id, :workspace_id], unique: true
  end
end
