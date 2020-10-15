class CreateApiWorkspaces < ActiveRecord::Migration[5.2]
  def change
    create_table :api_workspaces do |t|
      t.string :name
      t.references :creator, foreign_key: true
      t.text :description

      t.timestamps
    end
  end
end
