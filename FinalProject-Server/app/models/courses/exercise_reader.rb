class ExerciseReader

  #@brief read_exercise_file - read exercise file
  #@param filepath - path to the exercise configuration file
  #@return pointer to the file in memory, before parsing
  def read_exercise_file(filepath)
    exercise_file = Xml.readxml(filepath)
    return exercise_file
  end

  #@brief build_exercise - read exercise file, build the exercise object and return it
  #@param filepath - path to the exercise configuration file
  #@return exercise, the exercise is built dynamically by implementing class
  def build_exercise(filepath)
    raise NotImplementedError, "Implement this method in a child class"
  end

  #@brief build_tests - read exercise file, build the exercise tests and return them
  #@param filepath - path to the exercise configuration file
  #@return list of tests, the tests are built dynamically by implementing class
  def build_tests(filepath)
    raise NotImplementedError, "Implement this method in a child class"
  end

  #@brief build_arg_types - read exercise file, return the possible types for every argument
  #@param filepath - path to the exercise configuration file
  #@return list of arguments, each argument has a list possible types
  def build_arg_types(filepath)
    raise NotImplementedError, "Implement this method in a child class"
  end
end
