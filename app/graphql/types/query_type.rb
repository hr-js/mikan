module Types
  QueryType = GraphQL::ObjectType.define do
    name 'Query'
    description 'The root of all queries'

    field :allUser do
      type types[UserType]
      description 'All user'
      resolve ->(obj, args, ctx) { User.all }
    end

    field :user do
      type UserType
      description 'The user find by id'
      argument :id, !types.ID
      resolve ->(obj, args, ctx) { User.find(args[:id]) }
    end
  end
end
