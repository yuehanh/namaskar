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

  belongs_to :homespace, class_name: :Workspace

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

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def ensure_homespace
    unless self.homespace_id
      homespace = Workspace.new(owner_id: self.id)
      self.homespace_id = homespace.id
    end
  end
end
