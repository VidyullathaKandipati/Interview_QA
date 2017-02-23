Rails.application.routes.draw do
  root 'question_answers#index'
  resources :question_answers
end
