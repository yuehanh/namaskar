# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

20.times do
  name = Faker::Name.first_name
  pronouns = Faker::Gender.binary_type == "Female" ? "she/her/hers" : "he/him/his"
  User.create!(
    fullname: name,
    email: "#{name}@email.com",
    password: "password",
    pronouns: pronouns,
    team: Faker::Job.field, 
    role: Faker::Job.position,
  )
end
