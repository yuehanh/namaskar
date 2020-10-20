class Api::ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]

  # GET /api/projects/1
  # GET /api/projects/1.json
  def show
  end

  # POST /api/workspaces/:workspace_id/projects
  # POST /api/workspaces/:workspace_id/projects.json
  def create
    @project = Project.new(project_params)
    @project.lead_id = current_user.id
    @project.workspace_id = params[:workspace_id]
    if @project.save
      render :show, status: :created
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/projects/1
  # PATCH/PUT /api/projects/1.json
  def update
    if @project.update(project_params)
      render :show, status: :ok
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/projects/1
  # DELETE /api/projects/1.json
  def destroy
    name = @project.name
    @project.destroy
    render json: ["You have successfullly deleted '#{name}''"], status: 200
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_project
    @project = Project.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def project_params
    params.require(:project).permit(:name, :description, :lead_id)
  end
end
