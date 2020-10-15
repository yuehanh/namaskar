require "application_system_test_case"

class Api::WorkspacesTest < ApplicationSystemTestCase
  setup do
    @workspace = workspaces(:one)
  end

  test "visiting the index" do
    visit workspaces_url
    assert_selector "h1", text: "Api/Workspaces"
  end

  test "creating a Workspace" do
    visit workspaces_url
    click_on "New Api/Workspace"

    fill_in "Creator", with: @workspace.creator_id
    fill_in "Description", with: @workspace.description
    fill_in "Name", with: @workspace.name
    click_on "Create Workspace"

    assert_text "Workspace was successfully created"
    click_on "Back"
  end

  test "updating a Workspace" do
    visit workspaces_url
    click_on "Edit", match: :first

    fill_in "Creator", with: @workspace.creator_id
    fill_in "Description", with: @workspace.description
    fill_in "Name", with: @workspace.name
    click_on "Update Workspace"

    assert_text "Workspace was successfully updated"
    click_on "Back"
  end

  test "destroying a Workspace" do
    visit workspaces_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Workspace was successfully destroyed"
  end
end
