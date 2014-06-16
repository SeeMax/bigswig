BigSwig::Application.routes.draw do
  root 'application#page'
  get  '/details', to: 'application#details'
  get  '/:page',   to: 'application#page'
end
