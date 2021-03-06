Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create show update index]
    resources :tasks, only: %i[create update destroy]
    resources :workspaces, only: %i[create show update destroy] do
      resources :projects, only: :create
    end
    resources :projects, only: %i[show update destroy]
    resource :session, only: %i[create destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
end
