# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  fullname        :string
#  pronouns        :string
#  role            :string
#  team            :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  homespace_id    :bigint
#
class User < ApplicationRecord
  validates :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  before_validation :ensure_session_token
  after_commit :ensure_user_has_homespace, on: [:create, :update]

  belongs_to :homespace, class_name: :Workspace, optional: true

  # Many to Many Relationship between User and Workspace
  has_many :user_workspaces, dependent: :destroy, inverse_of: :user
  has_many :workspaces, through: :user_workspaces

  has_many :owned_spaces, class_name: :Workspace, foreign_key: :owner_id, dependent: :delete_all

  attr_reader :password

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def self.find_by_credentials(email, pw)
    user = User.find_by(email: email)

    if user&.is_password?(pw)
      return user
    end

    nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_user_has_homespace
    return if self.homespace

    if self.workspaces.empty?
      @workspace = Workspace.create!(owner_id: self.id)
      self.homespace = @workspace
    else
      self.homespace = self.workspaces.first
    end
    self.save!
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
