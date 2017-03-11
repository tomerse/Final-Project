class ExerciseReader

  require 'Exercises/exercise'

  ROOT = "#{Rails.root}"
  COURSESEFOLDER = 'lib/assets/courses'
  EXERCISESFOLDER = 'exercises'
  FILENAME = 'exercise_'
  EXTENSION = '.xml'


  def self.build_exercise(languagename, coursename, exerciseid)
    file = read_exercise_file(languagename, coursename, exerciseid)
    exercise = parse_exercise(languagename, coursename, file)
    return exercise
  end

  def self.build_tests(languagename, coursename, exerciseid)
    file = read_exercise_file(languagename, coursename, exerciseid)
    tests = parse_tests(file)
    return tests
  end

  def self.parse_exercise(languagename, coursename, file)
    exercise = Exercise.get_relevant_exercise(languagename, coursename, file)
    return exercise
  end

  def self.parse_tests(file)
    tests = TestsParser.parse_tests(file)
    return tests
  end

  def self.read_exercise_file(languagename, coursename, exerciseid)
    path = ROOT + '/' + COURSESEFOLDER + '/' + languagename.to_s + '/' + coursename.to_s + '/' + EXERCISESFOLDER + '/'
    filename = FILENAME + exerciseid.to_s + EXTENSION
    fullpath = path+filename
    file = Xml.readxml(fullpath)
    return file
  end

end