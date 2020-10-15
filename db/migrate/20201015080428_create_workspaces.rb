class CreateWorkspaces < ActiveRecord::Migration[5.2]
  def change
    create_table :workspaces do |t|
      t.string :name, null: false, default: "My Workspace"
      t.references :owner, foreign_key: { to_table: :users }, null: false
      t.text :description
      t.timestamps
    end
  end
end
