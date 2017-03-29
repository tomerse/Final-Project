
require 'courses/exercise_reader'

class ChatbotExerciseReader < ExerciseReader

  def build_exercise(filepath)
    exercise_file = read_exercise_file(filepath)
    exercise = parse_exercise(exercise_file)
    return exercise
  end

  def build_tests(filepath)
    exercise_file = read_exercise_file(filepath)
    tests = parse_tests(exercise_file)
    return tests
  end

  def build_arg_types(filepath)
    exercise_file = read_exercise_file(filepath)
    args_types = parse_arg_types(exercise_file)
    return args_types
  end

  def parse_exercise(exercise_file)
    id = Xml.get_element(exercise_file,"id")
    topic = Xml.get_element(exercise_file,"topic")
    instructions = Xml.get_element(exercise_file,"instructions")
    code = Xml.get_element(exercise_file,"code")
    tasks = Xml.get_elements(exercise_file, 'tasks//task','content') #['task1','task2']
    hints = Xml.get_elements(exercise_file,'hints','hint') #['hint1','hint2']
    chatbotinitmessage = Xml.get_element(exercise_file,"chatbotinitmessage")
    args = Xml.get_elements(exercise_file, 'argstypes//arg','argtypes') #['argtype1','argtype2']
    numofargs = args.length
    params = Hash["id"=>id, "topic"=>topic, "instructions"=>instructions, "code"=>code,
                "tasks"=>tasks.flatten, "hints"=>hints.flatten, "chatbotinitmessage"=>chatbotinitmessage,
                "numofargs"=>numofargs]
    exercise = ChatbotExercise.new(params)
    return exercise
  end


  def parse_tests(exercise_file)
    tests = TestsParser.parse_tests(exercise_file)
    return tests
  end

  def parse_arg_types(exercise_file)
    types = ArgTypesParser.parse_arg_types(exercise_file)
    return types
  end


end