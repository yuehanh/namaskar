Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create show update]
    resource :session, only: %i[create destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
end
