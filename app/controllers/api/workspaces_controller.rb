class Api::WorkspacesController < ApplicationController
  before_action :set_workspace, only: [:show, :update, :destroy]
  before_action :require_logged_in

  # GET /api/workspaces/1
  def show
  end

  # POST /api/workspaces
  def create
    @workspace = Workspace.new(workspace_params)
    @workspace.owner_id = current_user.id
    @workspace.name = "My Workspace" if @workspace.name.length.zero?

    if @workspace.save
      # make sure workspace and its own has a key in the relationship table
      @workspace.ensure_owner_workspace_relation
      current_user.homespace = @workspace
      current_user.save!
      render :show, status: :created
    else
      render json: @workspace.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/workspaces/1
  def update
    if @workspace.update(workspace_params)
      @workspace.ensure_owner_workspace_relation
      render :show, status: :ok
    else
      render json: @workspace.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/workspaces/1
  def destroy
    name = @workspace.name
    @workspace.destroy
    render json: ["You have successfullly deleted '#{name}''"], status: 200
  end

  protected

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_workspace
    @workspace = Workspace.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def workspace_params
    params.require(:workspace).permit(:name, :owner_id, :description, user_ids: [])
  end
end
