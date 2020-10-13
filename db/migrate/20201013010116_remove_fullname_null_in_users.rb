class RemoveFullnameNullInUsers < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :fullname, true
  end
end
