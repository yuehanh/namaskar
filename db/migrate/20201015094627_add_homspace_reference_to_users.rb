class AddHomspaceReferenceToUsers < ActiveRecord::Migration[5.2]
  def change
    add_reference :users, :homespace, foreign_key: {to_table: :workspaces}
  end
end
