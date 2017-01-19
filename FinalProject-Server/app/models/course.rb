class Course < ActiveRecord::Base
  attr_accessible :id, :name

  def initexercise(exerciseid)
    ExerciseReader.readexercise(exerciseid)
  end


end
