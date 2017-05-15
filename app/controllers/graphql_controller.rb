class GraphqlController < ApplicationController
#  skip_before_action :verify_authenticity_token

  def query
    result = MikanSchema.execute(params[:query], variables: params[:variables])
    render json: result
  end
end
