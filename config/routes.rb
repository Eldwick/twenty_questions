Rails.application.routes.draw do

  root 'game#new'

  post 'game/create', to: "game#create"

  get 'game/:id', to: "game#start", as: :game_start

  post 'game/:id/create_answer', to: "game#create_answer", as: :game_create_answer

  get 'game/:id/answerer', to: "game#answerer", as: :game_answerer

  get 'game/:id/questioner', to: "game#questioner", as: :game_questioner
  
  get 'game/:id/questions', to: "game#questions"

  post 'game/:id/ask', to: "game#ask", as: :question_ask

  post 'game/:id/respond/:question_id', to: "game#respond", as: :question_respond


end
