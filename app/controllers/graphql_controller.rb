class GraphqlController < ApplicationController
#  skip_before_action :verify_authenticity_token

  def query
    result = Types::Schema.execute(params[:query], variables: params[:variables])
    render json: result
  end
end
