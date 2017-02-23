json.extract! question_answer, :id, :question, :answer, :image, :tech, :created_at, :updated_at
json.url question_answer_url(question_answer, format: :json)
