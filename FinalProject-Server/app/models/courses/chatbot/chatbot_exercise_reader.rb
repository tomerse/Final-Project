
require 'courses/exercise_reader'

class ChatbotExerciseReader < ExerciseReader

  @@instance = nil

  def self.instance
    if @@instance.nil?
      @@instance = ChatbotExerciseReader.new
    end
    @@instance
  end

  def build_exercise(filepath)
    @exercise_file = read_exercise_file(filepath)
    parse_exercise(@exercise_file)
  end

  def build_arg_types(filepath)
    @exercise_file = read_exercise_file(filepath)
    ArgTypesParser.parse_arg_types(@exercise_file)
  end

  def build_tests(filepath)
    @exercise_file=read_exercise_file(filepath)
    TestsParser.parse_tests(@exercise_file)
  end


  def parse_exercise(exercise_file)
    id = Xml.get_element(exercise_file,'id')
    topic = Xml.get_element(exercise_file,'topic')
    instructions = Xml.get_element(exercise_file,'instructions')
    code = Xml.get_element(exercise_file,'code')
    tasks = Xml.get_elements(exercise_file, 'tasks//task','content') #['task1','task2']
    hints = Xml.get_elements(exercise_file,'exercise','hints') #['hint1','hint2']
    chatbotinitmessage = Xml.get_element(exercise_file,'chatbotinitmessage')
    args_types = Xml.get_elements(exercise_file, 'argstypes//arg','argtypes') #['argtype1','argtype2']
    numofargs = args_types.length
    params = Hash["id"=>id, "topic"=>topic, "instructions"=>instructions, "code"=>code,
                "tasks"=>tasks.flatten, "hints"=>hints.flatten, "chatbotinitmessage"=>chatbotinitmessage,
                  "numofargs"=>numofargs]
    ChatbotExercise.new(params)
  end

  def initialize
    @exercise_file = nil
  end

  private :initialize

end