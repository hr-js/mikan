Rails.application.routes.draw do
  post '/create_user' => 'user#create', format: :json
  post 'user_token' => 'user_token#create'
  resources :user, :only => [:index, :show]
  post '/graphql', to: 'graphql#query'
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
end
