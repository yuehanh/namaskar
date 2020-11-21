class Api::UsersController < ApplicationController
  before_action :set_user, only: %i[show update]
  before_action :require_logged_in, only: %i[show update]

  def index
    if params[:search]
      @users = User.where("email OR fullname LIKE :search_string ", substring: "%#{params[:search]}%")
      render :index
    end
  end

  def create
    @user = User.new(user_params)
    email_index = @user.email.index("@")
    @user.fullname ||= @user.email[0...email_index]

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
      @user.ensure_user_has_homespace
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
    params.require(:user).permit(:email, :password, :fullname, :pronouns, :role, :team, :session_token, :homespace_id, workspace_ids: [])
  end
end
