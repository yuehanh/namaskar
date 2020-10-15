class Api::WorkspacesController < ApplicationController
  before_action :set_workspace, only: [:show, :edit, :update, :destroy]

  # GET /api/workspaces
  # GET /api/workspaces.json
  def index
    @workspaces = Workspace.all
  end

  # GET /api/workspaces/1
  # GET /api/workspaces/1.json
  def show
  end

  # GET /api/workspaces/new
  def new
    @workspace = Workspace.new
  end

  # GET /api/workspaces/1/edit
  def edit
  end

  # POST /api/workspaces
  # POST /api/workspaces.json
  def create
    @workspace = Workspace.new(workspace_params)

    respond_to do |format|
      if @workspace.save
        format.html { redirect_to @workspace, notice: "Workspace was successfully created." }
        format.json { render :show, status: :created, location: @workspace }
      else
        format.html { render :new }
        format.json { render json: @workspace.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /api/workspaces/1
  # PATCH/PUT /api/workspaces/1.json
  def update
    respond_to do |format|
      if @workspace.update(workspace_params)
        format.html { redirect_to @workspace, notice: "Workspace was successfully updated." }
        format.json { render :show, status: :ok, location: @workspace }
      else
        format.html { render :edit }
        format.json { render json: @workspace.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/workspaces/1
  # DELETE /api/workspaces/1.json
  def destroy
    @workspace.destroy
    respond_to do |format|
      format.html { redirect_to workspaces_url, notice: "Workspace was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_workspace
    @workspace = Workspace.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def workspace_params
    params.require(:workspace).permit(:name, :creator_id, :description)
  end
end
