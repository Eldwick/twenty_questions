class GameController < ApplicationController
  before_action :get_game, only: [:start, :answerer, :questioner, :create_answer, :ask, :respond, :questions]
  def new
  end

  def create
    game = Game.create()
    redirect_to game_start_path(game)
  end

  def answerer
  end

  def create_answer
    @game.update(answer: params[:answer])
    respond_to do |format|
      format.json { render json:@game}
    end
  end

  def questioner
  end

  def start
  end

  def ask
    question = Question.create(text: params[:question])
    @game.questions << question
    respond_to do |format|
      format.json { render json: question}
    end
  end

  def respond
    question = Question.find(params[:question_id])
    question.update(correct: params[:response])
    respond_to do |format|
      format.json { render json: question}
    end
  end

  def questions
    respond_to do |format|
      format.json { render json: {questions: @game.questions}}
    end
  end

  private
  def get_game
    @game = Game.find(params[:id])
  end
end
