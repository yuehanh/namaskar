# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
UserWorkspace.destroy_all
Workspace.destroy_all
User.destroy_all
Project.destroy_all
Task.destroy_all

demo = User.create!(
  email: "demo@email.com",
  password: "demopassword",
  fullname: "Cosmic User",
  pronouns: Faker::Gender.binary_type == "Female" ? "she/her/hers" : "he/him/his",
  team: Faker::Job.field,
  role: Faker::Job.position,
)

demo.homespace = Workspace.create!(
  name: "Cozy Place",
  owner_id: demo.id,
  description: Faker::Quotes::Shakespeare.as_you_like_it_quote,
)

demo.save!
10.times do
  project = Project.create!(
    name: Faker::Movie.title,
    description: Faker::Marketing.buzzwords,
    lead_id: demo.id,
    workspace_id: demo.homespace.id,
  )

  10.times do
    Task.create!(
      name: Faker::Hipster.sentence,
      creator_id: demo.id,
      workspace_id: demo.homespace.id,
      project_id: project.id,
    )
  end
end

2.times do
  name = Faker::Superhero.unique.name
  pronouns = Faker::Gender.binary_type == "Female" ? "she/her/hers" : "he/him/his"
  user = User.create!(
    fullname: name,
    email: "#{name.split(" ").join(".")}@email.com",
    password: "password",
    pronouns: pronouns,
    team: Faker::Job.field,
    role: Faker::Job.position,
    homespace_id: demo.homespace_id,
  )
  user.workspaces = user.workspaces.push(demo.homespace)
end

5.times do
  workspace = Workspace.create!(
    name: Faker::Space.unique.nebula,
    owner_id: demo.id,
    description: Faker::Quotes::Shakespeare.as_you_like_it_quote,
  )

  2.times do
    name = Faker::Superhero.unique.name
    pronouns = Faker::Gender.binary_type == "Female" ? "she/her/hers" : "he/him/his"
    user = User.create!(
      fullname: name,
      email: "#{name.split(" ").join(".")}@email.com",
      password: "password",
      pronouns: pronouns,
      team: Faker::Job.field,
      role: Faker::Job.position,
      homespace_id: workspace.id,
    )
    user.workspaces = user.workspaces.push(workspace)
  end

  5.times do
    project = Project.create!(
      name: Faker::Movie.title,
      description: Faker::Marketing.buzzwords,
      lead_id: demo.id,
      workspace_id: workspace.id,
    )
    10.times do
      Task.create!(
        name: Faker::Hipster.sentence,
        creator_id: demo.id,
        workspace_id: workspace.id,
        project_id: project.id,
      )
    end
  end
end
