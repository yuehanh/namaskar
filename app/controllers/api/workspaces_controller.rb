class Api::WorkspacesController < ApplicationController
  before_action :set_workspace, only: [:show, :edit, :update, :destroy]

  # GET /api/workspaces/1
  def show
  end

  # POST /api/workspaces
  def create
    @workspace = Workspace.new(workspace_params)

    if @workspace.save
      render :show, status: :created
    else
      render json: @workspace.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/workspaces/1
  def update
    if @workspace.update(workspace_params)
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
