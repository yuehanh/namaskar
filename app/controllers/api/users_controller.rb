class Api::UsersController < ApplicationController
  before_action :set_user, only: %i[show update]
  before_action :require_logged_in, only: %i[show update]

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show, status: :created
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show; end

  def update
    if @user.update(user_params)
      render :show, status: :ok
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:email, :password, :fullname, :pronouns, :role, :team, :session_token, :homespace_id,workspace_ids: [])
  end
end
