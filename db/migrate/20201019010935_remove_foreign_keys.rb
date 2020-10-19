class RemoveForeignKeys < ActiveRecord::Migration[5.2]
  def change
    remove_foreign_key :users, :workspaces
    remove_foreign_key :workspaces, :users
  end
end
