Rails.application.routes.draw do
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Routes to get user info
  resources :users
  get '/users/:id/getName', to: 'users#getName'
  get '/users/:id/getPoints', to: 'users#getPoints' 
  post '/users/:id/sumPoints', to: 'users#sumPoints'
  get '/users/:id/getAll_People_byDorm', to: 'users#getAll_People_byDorm'
  get '/users/:id/getTop_All', to: 'users#getTop_All'
  get '/users/:id/getDormRank', to: 'users#getDormRank'

end
