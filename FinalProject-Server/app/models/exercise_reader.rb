class ExerciseReader

  ROOT = "#{Rails.root}"
  EXERCISEFOLDER = "lib/assets/exercises"
  FILENAME = "exercise_"
  EXTENSION = ".xml"


  def self.readexercise(exerciseid)
    exercisepath = ROOT + '/' + EXERCISEFOLDER + '/' + FILENAME + exerciseid.to_s + EXTENSION
    print "printing the path: "
    print exercisepath.to_s
  end

end