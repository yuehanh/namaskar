class CreateApiProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.string :description
      t.references :lead, null: false, references: :users
      t.references :workspace, foreign_key: true

      t.timestamps
    end
  end
end
