json.partial! "api/users/user", user: @user
json.extract! @user, :homespace_id
