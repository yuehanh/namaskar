class RemoveProjectWorkspaceForeignKey < ActiveRecord::Migration[5.2]
  def change
    remove_foreign_key :projects, :workspaces
  end
end
