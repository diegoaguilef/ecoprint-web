Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
    passwords: 'users/passwords',
    confirmations: 'users/confirmations'
  }
  
  authenticated :user, lambda {|u| u.role == "admin"} do
    resources :communes
    resources :cities
    resources :products
    resources :sub_categories
    resources :categories
  end

  authenticated :user, lambda {|u| u.role == "client"} do
    root to: "market#products", as: "client_user"
  end

  #marketplace routes
  get 'market/products'
  get 'market/shopping_cart'
  get 'market/checkout'
  get 'market/post_sale'

  # landingpage routes
  get 'index', to: "home#index" 
  get 'blog', to: "home#blog"
  get 'contact', to: "home#contact"

  # Defines the root path route ("/")
  root "home#index"
end
