class AddOwnerForeignKey < ActiveRecord::Migration[5.2]
  def change
    add_foreign_key :workspaces, :users, column: :owner_id, on_delete: :cascade
  end
end
