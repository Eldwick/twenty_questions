class AddAnswerToGame < ActiveRecord::Migration
  def change
    add_column :games, :answer, :string
  end
end
