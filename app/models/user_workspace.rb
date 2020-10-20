# == Schema Information
#
# Table name: user_workspaces
#
#  id           :bigint           not null, primary key
#  workspace_id :bigint           not null
#  user_id      :bigint           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class UserWorkspace < ApplicationRecord
  validates :workspace_id, :user_id, presence: true
  validates :workspace_id, uniqueness: { scope: :user_id }
  belongs_to :workspace
  belongs_to :user
end
