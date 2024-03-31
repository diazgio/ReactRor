Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :products, only: [:index]
    end
  end

  resources :products, expect: [:index]
  
  root "pages#home"
  get "up" => "rails/health#show", as: :rails_health_check
end
