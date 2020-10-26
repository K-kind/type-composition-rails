class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  include ActionController::Cookies
  before_action :set_custom_header
  # def require_login
  #   @current_user = User.find_by(id: session[:user_id])
  #   return if @current_user

  #   render json: { error: 'unauthorized' }, status: :unauthorized
  # end
  def set_custom_header
    response.headers['Access-Control-Expose-Headers'] = 'access-token, client, uid'
  end
end
