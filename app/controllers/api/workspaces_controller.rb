class Api::WorkspacesController < ApplicationController
  before_action :set_api_workspace, only: [:show, :edit, :update, :destroy]

  # GET /api/workspaces
  # GET /api/workspaces.json
  def index
    @api_workspaces = Api::Workspace.all
  end

  # GET /api/workspaces/1
  # GET /api/workspaces/1.json
  def show
  end

  # GET /api/workspaces/new
  def new
    @api_workspace = Api::Workspace.new
  end

  # GET /api/workspaces/1/edit
  def edit
  end

  # POST /api/workspaces
  # POST /api/workspaces.json
  def create
    @api_workspace = Api::Workspace.new(api_workspace_params)

    respond_to do |format|
      if @api_workspace.save
        format.html { redirect_to @api_workspace, notice: 'Workspace was successfully created.' }
        format.json { render :show, status: :created, location: @api_workspace }
      else
        format.html { render :new }
        format.json { render json: @api_workspace.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /api/workspaces/1
  # PATCH/PUT /api/workspaces/1.json
  def update
    respond_to do |format|
      if @api_workspace.update(api_workspace_params)
        format.html { redirect_to @api_workspace, notice: 'Workspace was successfully updated.' }
        format.json { render :show, status: :ok, location: @api_workspace }
      else
        format.html { render :edit }
        format.json { render json: @api_workspace.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/workspaces/1
  # DELETE /api/workspaces/1.json
  def destroy
    @api_workspace.destroy
    respond_to do |format|
      format.html { redirect_to api_workspaces_url, notice: 'Workspace was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_workspace
      @api_workspace = Api::Workspace.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def api_workspace_params
      params.require(:api_workspace).permit(:name, :creator_id, :description)
    end
end
