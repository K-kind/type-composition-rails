Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth', controllers: {
    registrations: 'auth/registrations'
   }
  scope :api do
    post 'cookie', to: 'cookie#create'
    # resources :users
    # resource :auth, controller: 'auth'
  end
end
