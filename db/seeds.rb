# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Workspace.destroy_all
UserWorkspace.destroy_all

10.times do
  name = Faker::Name.unique.first_name
  pronouns = Faker::Gender.binary_type == "Female" ? "she/her/hers" : "he/him/his"
  user = User.create!(
    fullname: name,
    email: "#{name}@email.com",
    password: "password",
    pronouns: pronouns,
    team: Faker::Job.field,
    role: Faker::Job.position,
  )

  user.homespace = Workspace.create!(
    name: "#{name}'s Workspace'",
    owner_id: user.id,
  )

  user.save!
end

demo = User.create!(
  email: "demo@email.com",
  password: "demopassword",
  fullname: "Demo User",
  pronouns: Faker::Gender.binary_type == "Female" ? "she/her/hers" : "he/him/his",
  team: Faker::Job.field,
  role: Faker::Job.position,
)

demo.homespace = Workspace.create!(
  name: "Cozy Place",
  owner_id: demo.id,
)

demo.save!
