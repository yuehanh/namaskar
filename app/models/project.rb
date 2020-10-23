# == Schema Information
#
# Table name: projects
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  description  :string
#  lead_id      :bigint           not null
#  workspace_id :bigint
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Project < ApplicationRecord
  validates :lead_id, :workspace_id, :name, presence: true

  belongs_to :lead, class_name: :User
  belongs_to :workspace
  has_many :tasks
end
