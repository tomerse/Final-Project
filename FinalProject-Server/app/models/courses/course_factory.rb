class CourseFactory

  ROOT = "#{Rails.root}"

  # Courses configuration file
  COURSES_FOLDER = 'lib/assets/courses'
  COURSES_CONFIGURATION_FILE = 'courses.xml'

  #Programming Languages
  PYTHON = 'python'

  # Exercise configuration files path
  EXERCISES_FOLDER = 'exercises'
  FILENAME = 'exercise_'
  EXTENSION = '.xml'

  def self.get_exercise_folder(course_name, language_name)
    folder_path = ROOT + '/' + COURSES_FOLDER + '/' + course_name.to_s + '/' + EXERCISES_FOLDER + '/' + language_name.to_s
    return folder_path
  end

  def self.get_exercise_file(course_name, language_name, ex_id)
    path = get_exercise_folder(course_name, language_name) + '/'
    filename = FILENAME + ex_id.to_s + EXTENSION
    fullpath = path+filename
    return fullpath
  end

  def self.get_exercise_reader(course_name)
    if course_name == CHATBOT
      chatbot_exercise_reader = ChatbotExerciseReader.new
      return chatbot_exercise_reader
    end
    print "course name not found: " + course_name + " \n"
    return
  end

  def self.get_code_handler(course_name, language_name)
    #check course name
    if course_name == CHATBOT
        exercise_reader = CourseFactory.get_exercise_reader(course_name)
        #check programming language for chatbot course
        if language_name == PYTHON
          return ChatbotPythonCodeHandler.new(language_name, exercise_reader)
        end
        raise ArgumentError, 'Undefined language_name = ' + language_name
    end
    raise ArgumentError, 'Undefined course_name = ' + course_name
  end

  def self.get_all_courses
    courses = []
    file_path = ROOT + '/' + COURSES_FOLDER + '/' + COURSES_CONFIGURATION_FILE
    file = Xml.readxml(file_path)
    #read all course properties
    titles  = Xml.get_elements(file,'courses//course','title')
    generals  = Xml.get_elements(file,'courses//course','general')
    syllabuses  = Xml.get_elements(file,'courses//course','syllabus')
    currLangs  = Xml.get_elements(file,'courses//course','currlang')
    courseApps  = Xml.get_elements(file,'courses//course','courseapp')
    #build every course as object
    num_of_courses = titles.length
    if (not titles.flatten.empty?) and (num_of_courses == generals.length) and (num_of_courses  == syllabuses.length) and (num_of_courses == currLangs.length) and (num_of_courses == courseApps.length)
      for i in 0..num_of_courses-1
        params = Hash["title"=>titles[i][0], "general"=>generals[i][0], "syllabus"=>syllabuses[i][0], "currLang"=>currLangs[i][0],
                      "courseApp"=>courseApps[i][0]]
        course = Course.new(params)
        courses.push(course)
      end
    end
    return courses
  end


  def self.get_all_exercises(course_exercise_reader, exercises_folder_path)
    exercises_topics = []
    #find num of exercises
    num_of_exercises = Dir.glob(exercises_folder_path+"/*.xml").count
    #read every exercise topic by ascending order
    for i in 0..num_of_exercises-1
      exercise_file_path = exercises_folder_path + '/exercise_' + (i+1).to_s + '.xml'
      ex = course_exercise_reader.build_exercise(exercise_file_path)
      exercises_topics.push(ex.topic)
    end
    return exercises_topics
  end


end


