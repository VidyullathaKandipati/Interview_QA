class CreateQuestionAnswers < ActiveRecord::Migration
  def change
    create_table :question_answers do |t|
      t.text :question
      t.text :answer
      t.text :image
      t.text :tech

      t.timestamps null: false
    end
  end
end
