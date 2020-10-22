class UsersController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      payload = { user: { name: user.name, email: user.email } }
    else
      payload = { errors: user.errors.full_messages }
    end
    render json: payload
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
