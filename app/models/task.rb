class Task < ApplicationRecord
  belongs_to :creator
  belongs_to :workspace
  belongs_to :assignee
  belongs_to :project
end
