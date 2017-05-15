Mutations::CreateUesrMutaion = GraphQL::Relay::Mutation.define do
  name "CreateUesrMutaion"
  return_field :user, Types::UserType

  input_field :name, !types.String
  input_field :email, !types.String
  input_field :password, !types.String
  input_field :password_confirmation, !types.String

  resolve ->(obj, args, ctx) {
    user = User.create(name: args[:name], email: args[:email], password: args[:password], password_confirmation: args[:password_confirmation])

    response = {
      user: user
    }
  }
end
