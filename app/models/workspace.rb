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
end
