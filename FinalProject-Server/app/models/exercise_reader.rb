class ExerciseReader

  require 'Exercises/exercise'

  ROOT = "#{Rails.root}"
  COURSESEFOLDER = 'lib/assets/courses'
  EXERCISESFOLDER = 'exercises'
  FILENAME = 'exercise_'
  EXTENSION = '.xml'


  def self.build_exercise(language_name, course_name, ex_id)
    file = read_exercise_file(language_name, course_name, ex_id)
    exercise = parse_exercise(language_name, course_name, file)
    return exercise
  end

  def self.build_tests(language_name, course_name, ex_id)
    file = read_exercise_file(language_name, course_name, ex_id)
    tests = parse_tests(file)
    return tests
  end

  def self.build_arg_types(language_name, course_name, ex_id)
    file = read_exercise_file(language_name, course_name, ex_id)
    args_types = parse_arg_types(file)
    return args_types
  end

  def self.parse_exercise(language_name, course_name, file)
    exercise = Exercise.get_relevant_exercise(language_name, course_name, file)
    return exercise
  end

  def self.parse_tests(file)
    tests = TestsParser.parse_tests(file)
    return tests
  end

  def self.parse_arg_types(file)
    types = ArgTypesParser.parse_arg_types(file)
    return types
  end

  def self.read_exercise_file(language_name, course_name, ex_id)
    path = ROOT + '/' + COURSESEFOLDER + '/' + language_name.to_s + '/' + course_name.to_s + '/' + EXERCISESFOLDER + '/'
    filename = FILENAME + ex_id.to_s + EXTENSION
    fullpath = path+filename
    file = Xml.readxml(fullpath)
    return file
  end

end