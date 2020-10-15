# == Schema Information
#
# Table name: workspaces
#
#  id          :bigint           not null, primary key
#  name        :string           default("My Workspace"), not null
#  owner_id    :bigint           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Workspace < ApplicationRecord
  belongs_to :owner, class_name: :User
  # Many to Many Relationship between User and Workspace
  has_many :user_workspaces, dependent: :destroy, inverse_of: :workspace
  has_many :users, through: :user_workspaces
end
