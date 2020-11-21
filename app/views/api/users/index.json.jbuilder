json.searches do
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :email, :fullname
    end
  end
end
