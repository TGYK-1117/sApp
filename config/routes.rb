Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'cats/index'
      post 'cats/create'
      get '/show/:id', to: 'cats#show'
      delete '/destroy/:id', to: 'cats#destroy'
      get '/random', to: 'cats#random'
    end
  end
  root 'landingpage#index'
  get '/*path' => 'landingpage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
