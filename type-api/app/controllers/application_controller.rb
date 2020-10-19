class ApplicationController < ActionController::API
  def require_login
    @current_user = User.find_by(id: session[:user_id])
    return if @current_user

    render json: { error: 'unauthorized' }, status: :unauthorized
  end
end
