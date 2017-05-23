
NOT_IMPLEMENTED_MESSAGE = 'Implement this method in a child class'
CHATBOT_RUNNING_TIMEOUT = 1

# Module includes methods to implement for every programming language.
# Responsible for code generation
module ChatbotCodeGenerator


  #@brief generate_code - generate code to compile/run (per programming language)
  #@param code - "raw" code to wrap
  #@param func_name - the required function name in the code
  #@param num_of_args - number of arguments for func_name
  #@param args_types - possible types for every argument
  #@return - generated code, ready for compilation
  def generate_code(code, func_name, num_of_args, args_types)
    raise NotImplementedError, NOT_IMPLEMENTED_MESSAGE
  end

  #@brief get_func_name - get the required main function name for the input code
  #@param code - "raw" code to wrap
  #@return - the function name
  def get_func_name(code)
    raise NotImplementedError, NOT_IMPLEMENTED_MESSAGE
  end


  #@brief generate_args_list_code
  #   generate args list code to call the required function
  #@param num_of_args - number of arguments for func_name
  #@return - string of arguments in correct types
  def generate_args_list_code(num_of_args)
    raise NotImplementedError, NOT_IMPLEMENTED_MESSAGE
  end

  #@brief parse_args
  #   parse arguments to required types
  #@param args_types - list of lists - first level contains every argument, second level contains all possible types for this argument
  #@return - parsing code for each argument
  def parse_args(args_types)
    raise NotImplementedError, NOT_IMPLEMENTED_MESSAGE
  end


  #@brief generate_main_func_code - generate main function code - definition, arguments parsing and call to required function
  #@param func_name - the required function name in the code
  #@param num_of_args - number of arguments for func_name
  #@param args_list_code - arguments with corret types  to call the reqruied function
  #@param args_types - possible types for every argument
  #@return - code of main function
  def generate_main_func_code(func_name, num_of_args, args_list_code, args_types)
    raise NotImplementedError, NOT_IMPLEMENTED_MESSAGE
  end

end


# Module includes methods to implement for every programming language separately.
# Responsible for creation of code running commands
module ChatbotCodeRunner

  #@brief execute_code - put code in file with relevant extension (per language) and run it
  #@param generated_code - code ready for compilation
  #@param args_list - string contains list of arguments for execution command
  #@return output of the code
  def execute_code(generated_code, args_list)
    raise NotImplementedError, NOT_IMPLEMENTED_MESSAGE
  end

  #@brief execute_file - run file with code of specific programming language with list of arguments
  #@param file_to_run - path to file with generated code
  #@param args_list - string contains list of arguments for execution command
  #@return output of the code
  def execute_file(file_to_run, args_list)
    raise NotImplementedError, NOT_IMPLEMENTED_MESSAGE
  end

  #@brief compile_code
  #@param generated_code - code ready for compilation
  #@return code compilation result and path to compiled file
  def compile_code(generated_code)
    raise NotImplementedError, NOT_IMPLEMENTED_MESSAGE
  end

  #@brief compile_file
  #@param file_to_run - path to file with generated code
  #@return code compilation result and path to compiled file
  def compile_file(file_to_run)
    raise NotImplementedError, NOT_IMPLEMENTED_MESSAGE
  end

  #@brief parse_compilation_error
  #@param error - compilation error, string
  #return compilation error as string without unnecessary data
  def parse_compilation_error(error)
    raise NotImplementedError, NOT_IMPLEMENTED_MESSAGE
  end

end


# Module includes methods for chatbot code checker
# General for every programming language
module ChatbotCodeChecker

  #@brief run_exercise_code - compiling and running code with list of arguments
  #@param code - the "raw" code to compile
  #@param args - list of arguments
  #@param exercise_file - config file for current exercise. Argument types are read from this file
  #@return output of the code
  def run_exercise_code(code, args, exercise_file)
    raise NotImplementedError, NOT_IMPLEMENTED_MESSAGE
  end

  #@brief check_exercise_code - check code for specific exercise. Run compilation and specific unit tests for the exercise on the input code
  #@param code - the "raw" code to check
  #@param args - list of arguments
  #@param exercise_file - config file for current exercise. Argument types are read from this file
  #@return output of the code
  def check_exercise_code(code, exercise_file)
    raise NotImplementedError, NOT_IMPLEMENTED_MESSAGE
  end

  #@brief compile_exercise_code - generate wrapping code for the "raw" code and compiling
  #@param code - the "raw" code to compile
  #@param args - list of arguments
  #@param exercise_file - config file for current exercise. Argument types are read from this file
  #@return compilation success/failure, compilation error result (if any) and path to compiled file
  def compile_exercise_code(code, exercise_file)
    raise NotImplementedError, NOT_IMPLEMENTED_MESSAGE
  end

  #@brief builld_tests - build tests relevant for specific exercise
  #@param exercise_file - config file for current exercise. Argument types are read from this file
  #@return list of ChatbotTest
  def builld_tests(exercise_file)
    raise NotImplementedError, NOT_IMPLEMENTED_MESSAGE
  end

  #@brief run_tests - run tests per exercise
  #@param tests - list of ChatbotTest to run
  #@param file_to_test - path to compiled file, to run the tests on it
  #@return test success/failure and failure reason (if any)
  def run_tests(tests, file_to_test)
    raise NotImplementedError, NOT_IMPLEMENTED_MESSAGE
  end

  #@brief build_string_args_list - create string of arguments to run by shell command
  #@param args - list of arguments
  #@return string of arguments to run by shell command
  def build_string_args_list(args)
    raise NotImplementedError, NOT_IMPLEMENTED_MESSAGE
  end

  #@brief build_arg_types - create string of arguments to run by shell command
  #@param exercise_file - config file for current exercise. Argument types are read from this file
  #@return list of list of argument types. Every argument can have several possible types (for dynamic programming languages)
  def build_arg_types(exercise_file)
    raise NotImplementedError, NOT_IMPLEMENTED_MESSAGE
  end

end




class ChatbotCodeHandler
  include ChatbotCodeGenerator, ChatbotCodeChecker, ChatbotCodeRunner

  def initialize(language_name, exercise_reader)
    @course_name = CHATBOT
    @language_name = language_name
    @exercise_reader = exercise_reader
    @chatbot_reader = ChatbotReader.new
  end



  def run_exercise_code(code, args, exercise_file)
    exercise = @exercise_reader.build_exercise(exercise_file)
    args_types = build_arg_types(exercise_file)
    (args_list, num_of_args) = build_string_args_list(args)
    func_name = get_func_name(exercise.code)
    generated_code = code
    if (func_name <=> "") != 0
      generated_code = generate_code(code, func_name, num_of_args, args_types)
    end
    # Running the code
    code_res = execute_code(generated_code, args_list)
    out_message = exercise.chatbotoutputmessage
    out_message = out_message % code_res
    return out_message
  end




  def check_exercise_code(code, ex_id,exercise_file)
    status = "success"
    caption = "Good Work!"
    generic_message = "Your code seems to be correct!\nReady to run it with Monkey Chatbot?!"
    failure_reason = ""
    more_info = ""
    (compilation_success, comp_res, compiled_file) = compile_exercise_code(code, exercise_file)
    if compilation_success == false
      status = "compilation error"
      caption = "Compilation Error"
      generic_message = "Compilation error has occurred, your code cannot be submitted."
      specific_message = "The specific error is:\n"
      failure_reason = specific_message + comp_res
      more_info = "Read more about compilation errors: https://en.wikipedia.org/wiki/Compilation_error"
    else
      tests = build_tests(exercise_file)
      if not tests.empty?
        (tests_success, failure_test) = run_tests(tests, compiled_file)
        if tests_success == false
          status = "tests failed"
          caption = "Task Not Completed"
          generic_message = "Your code is almost correct! Let me help you with a little clue,"
          failure_reason = failure_test
        end
      end
    end
    return [status, caption, generic_message, failure_reason, more_info]
  end


  def compile_exercise_code(code, exercise_file)
    exercise = @exercise_reader.build_exercise(exercise_file)
    args_types = build_arg_types(exercise_file)
    success = false
    code_res = ''
    num_of_args = args_types.length
    func_name = get_func_name(exercise.code)
    generated_code = code
    if (func_name <=> "") != 0
      generated_code = generate_code(code, func_name, num_of_args, args_types)
    end
    (code_res, compiled_file) = compile_code(generated_code)
    if (code_res <=> "") == 0
      success = true
    end
    return [success, code_res, compiled_file]
  end



  def run_tests(tests, file_to_test)
    tests_success = true
    failure = ''
    tests.each{ |test|
      input = test.get_input
      (args_list, num_of_args) = build_string_args_list(input)
      output = execute_file(file_to_test, args_list)
      expected_output = test.get_expected_output
      if (expected_output[0] <=> output) != 0
        tests_success = false
        failure = test.get_failure
        return [tests_success, failure[0]]
      end
    }
    return [tests_success, failure[0]]
  end



  def build_tests(exercise_file)
    tests = @exercise_reader.build_tests(exercise_file)
    return tests
  end


  def build_arg_types(exercise_file)
    args_types = @exercise_reader.build_arg_types(exercise_file)
    return args_types
  end



  def build_string_args_list(args)
    args_list = ""
    num_of_args = 0
    if !args.nil?
      num_of_args = args.length
      # build arguments names as string & arguments types list
      args_list = "\"" + args[0] + "\""
      if num_of_args > 1
        for i in 1..num_of_args-1
          args_list += " \"" + args[i] + "\""
        end
      end
    end
    return [args_list, num_of_args]
  end

end

