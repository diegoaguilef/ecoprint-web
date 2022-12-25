Rails.application.routes.draw do

  resources :maintainers
  
  get 'administration/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  scope "auth" do 
    devise_for :users, controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations',
      passwords: 'users/passwords',
      confirmations: 'users/confirmations'
    }
  end

  resources :users

  authenticated :user, lambda {|u| u.role == "admin"} do
    resources :communes
    resources :cities
    resources :products
    resources :sub_categories
    resources :categories
    get 'administration', to: "home#administration"
  end

  authenticated :user, lambda {|u| u.role == "client"} do
    root to: "market#products", as: "client_user"
  end

  #marketplace routes
  get 'market/products'
  get 'market/categories'
  get 'market/shopping_cart'
  delete 'market/remove_cart_product', to: "market#remove_cart_product"
  get 'market/add_cart_product'
  get 'market/checkout'
  get 'market/post_sale'
  get 'market/product_detail'

  # landingpage routes
  get 'index', to: "home#index" 
  get 'blog', to: "home#blog"
  get 'contact', to: "home#contact"

  # Defines the root path route ("/")
  root "home#index"

end
