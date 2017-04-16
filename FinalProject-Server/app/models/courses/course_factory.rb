class CourseFactory

  ROOT = "#{Rails.root}"

  #Programming Languages
  PYTHON = 'python'

  # Exercise configuration files path
  COURSESEFOLDER = 'lib/assets/courses'
  EXERCISESFOLDER = 'exercises'
  FILENAME = 'exercise_'
  EXTENSION = '.xml'

  def self.get_exercise_folder(course_name, language_name)
    folder_path = ROOT + '/' + COURSESEFOLDER + '/' + course_name.to_s + '/' + EXERCISESFOLDER + '/' + language_name.to_s
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
      chatbot_exercise_reader = ChatbotExerciseReader.instance
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

  def self.get_all_courses()
    courses = []
    title = "Python Chatbot"
    general = "Learn Python programming by building your own chatbot!"
    syllabus = "Introduction, variables, logic expressions, conditions, loops"
    currLang = "python"
    courseApp = "chatbot"
    params = Hash["title"=>title, "general"=>general, "syllabus"=>syllabus, "currLang"=>currLang,
                  "courseApp"=>courseApp, "courseApp"=>courseApp]
    chatbot_py = Course.new(params)
    courses.push(chatbot_py)
    currLang = "java"
    title = "Java Chatbot"
    general = "Learn Java programming by building your own chatbot!"
    params = Hash["title"=>title, "general"=>general, "syllabus"=>syllabus, "currLang"=>currLang,
                  "courseApp"=>courseApp, "courseApp"=>courseApp]
    chatbot_jav = Course.new(params)
    courses.push(chatbot_jav)
    return courses
  end


  def self.get_all_exercises(course_exercise_reader, exercises_folder_path)
    exercises_topics = []
    Dir.glob(exercises_folder_path+"/*.xml") do |exercise_file_path|
      course_exercise_reader.build_exercise(exercise_file_path)
      cur_exercise_topic = course_exercise_reader.get_exercise_topic()
      exercises_topics.push(cur_exercise_topic)
    end
    return exercises_topics
  end


end


