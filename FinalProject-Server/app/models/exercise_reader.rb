class ExerciseReader

  require 'Exercises/exercise'

  ROOT = "#{Rails.root}"
  COURSESEFOLDER = 'lib/assets/courses'
  EXERCISESFOLDER = 'exercises'
  FILENAME = 'exercise_'
  EXTENSION = '.xml'


  def self.build_exercise(languagename, coursename, exerciseid)
    xml = read_exercise_xml(languagename, coursename, exerciseid)
    exec = parse_xml(languagename, coursename, xml)
    return exec
  end

  def self.parse_xml(languagename, coursename, xml)
    exec = Exercise.get_relevant_exercise(languagename, coursename, xml)
    return exec
  end

  def self.read_exercise_xml(languagename, coursename, exerciseid)
    path = ROOT + '/' + COURSESEFOLDER + '/' + languagename.to_s + '/' + coursename.to_s + '/' + EXERCISESFOLDER + '/'
    filename = FILENAME + exerciseid.to_s + EXTENSION
    fullpath = path+filename
    xml = Xml.readxml(fullpath)
    return xml
  end

end