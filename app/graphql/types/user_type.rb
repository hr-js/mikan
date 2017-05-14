module Types
  UserType = GraphQL::ObjectType.define do
    name 'User'
    description 'The user'

    field :id, !types.ID
    field :name, !types.String
    field :email, !types.String
  end
end
