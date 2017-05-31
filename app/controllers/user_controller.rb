class UserController < ApplicationController
  def create
    user = User.new(permited_params)

    if user.save
      render json: {
        status: 200,
        message: 'Successfully created User.',
        user: user
      }.to_json
    else
      render json: {
        status: 500,
        errors: user.errors
      }.to_json
    end
  end

  private

  def permited_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
