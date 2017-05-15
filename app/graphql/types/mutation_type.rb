module Types
  MutationType = GraphQL::ObjectType.define do
    name 'Mutation'
    description 'The root of all mutations'

    field :createUser, field: Mutations::CreateUesrMutaion.field
  end
end
