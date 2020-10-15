require 'test_helper'

class Api::WorkspacesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @api_workspace = api_workspaces(:one)
  end

  test "should get index" do
    get api_workspaces_url
    assert_response :success
  end

  test "should get new" do
    get new_api_workspace_url
    assert_response :success
  end

  test "should create api_workspace" do
    assert_difference('Api::Workspace.count') do
      post api_workspaces_url, params: { api_workspace: { creator_id: @api_workspace.creator_id, description: @api_workspace.description, name: @api_workspace.name } }
    end

    assert_redirected_to api_workspace_url(Api::Workspace.last)
  end

  test "should show api_workspace" do
    get api_workspace_url(@api_workspace)
    assert_response :success
  end

  test "should get edit" do
    get edit_api_workspace_url(@api_workspace)
    assert_response :success
  end

  test "should update api_workspace" do
    patch api_workspace_url(@api_workspace), params: { api_workspace: { creator_id: @api_workspace.creator_id, description: @api_workspace.description, name: @api_workspace.name } }
    assert_redirected_to api_workspace_url(@api_workspace)
  end

  test "should destroy api_workspace" do
    assert_difference('Api::Workspace.count', -1) do
      delete api_workspace_url(@api_workspace)
    end

    assert_redirected_to api_workspaces_url
  end
end
