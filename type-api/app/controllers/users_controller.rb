class UsersController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      payload = { message: '登録が完了しました。', name: user.name }
    else
      payload = { errors: user.errors.full_messages }
    end
    render json: payload
  end

  private

  def uesr_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
