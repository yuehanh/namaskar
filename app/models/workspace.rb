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
  validates :owner_id, :name, presence: true

  belongs_to :owner, class_name: :User
  has_many :projects

  # Many to Many Relationship between User and Workspace
  has_many :user_workspaces, dependent: :destroy, inverse_of: :workspace
  has_many :users, through: :user_workspaces

  before_validation :ensure_name
  after_commit :ensure_owner_workspace_relation, :ensure_name, on: [:create, :update]

  #Make sure owner and the workspace is related
  def ensure_owner_workspace_relation
    return if self.user_ids.include?(self.owner_id)

    self.user_ids = self.user_ids.push(self.owner_id)
  end

  private

  def ensure_name
    self.name = "My Workspace" if self.name == ""
  end
end
