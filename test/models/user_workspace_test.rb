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
require 'test_helper'

class UserWorkspaceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
