class Question < ActiveRecord::Base
  belongs_to :game

  def correct_text
    unless self.correct.nil?
      return self.correct ? "Yes" : "No"
    end
  end
end
