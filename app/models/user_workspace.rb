class UserWorkspace < ApplicationRecord
  validates :workspace_id, :user_id, presence: true
  validates :workspace_id, uniqueness: { scope: :user_id }
  belongs_to :workspace
  belongs_to :user
end
