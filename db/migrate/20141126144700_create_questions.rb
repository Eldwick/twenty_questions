class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :text
      t.boolean :correct
      t.integer :game_id

      t.timestamps
    end
  end
end
