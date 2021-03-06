class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def page
    render template: "pages/#{params[:page] || 'index'}"
  rescue ActionView::MissingTemplate
    render template: "pages/404"
  end

  def details
    render template: "pages/details", layout: "detail-layout"
  end
end
