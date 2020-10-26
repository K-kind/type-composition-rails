class CookieController < ApplicationController
  before_action :authenticate_user!
  EXPIRES_AT = 30.days.from_now

  def create
    auth_tokens = params[:auth_tokens]
    return if !auth_tokens

    cookies[:auth_tokens] = {
      value: auth_tokens,
      expires: EXPIRES_AT,
      same_site: 'Lax'
    }
    # head :no_content
    render json: { hoge: cookies[:auth_tokens] }
  end
end
