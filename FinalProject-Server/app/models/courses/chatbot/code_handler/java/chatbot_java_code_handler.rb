require 'compilers/java_compiler'
class ChatbotJavaCodeHandler < ChatbotCodeHandler

  JAVACOMP = "#{Rails.root}/lib/java_code.java"
  JAVARUN = "#{Rails.root}/lib/Simple"


  #@brief execute_code - put code in file with relevant extension (per language) and run it
  #@param generated_code - code ready for compilation
  #@param args_list - string contains list of arguments for execution command
  #@return output of the code
  def execute_code(generated_code, args_list)
    #File.open(JAVARUN, 'w'){|f| f.write generated_code}
    #output = execute_file(JAVARUN, args_list)
    comp_res, file_to_run = compile_code(generated_code)
    output = execute_file(file_to_run, args_list)
    return output
  end

  #@brief execute_file - run file with code of specific programming language with list of arguments
  #@param file_to_run - path to file with generated code
  #@param args_list - string contains list of arguments for execution command
  #return tuple: is_err - boolean indicates if runtime error detected, output - the output as string
  def execute_file(file_to_run, args_list)
    compiler = JavaCompiler.new
    output = compiler.run_file(file_to_run, args_list, CHATBOT_RUNNING_TIMEOUT)
    (is_err, output) = parse_runtime_error(output)
    return is_err, output
  end

  #@brief compile_code
  #@param generated_code - code ready for compilation
  #@return code compilation result and path to compiled file
  def compile_code(generated_code)
    File.open(JAVACOMP, 'w'){|f| f.write generated_code}
    (comp_res, file_to_run) = compile_file(JAVACOMP)
    comp_res = parse_compilation_error(comp_res)
    return [comp_res, file_to_run]
  end

  #@brief compile_file
  #@param file_to_run - path to file with generated code
  #@return code compilation result and path to compiled file
  def compile_file(file_to_run)
    compiler = JavaCompiler.new
    comp_res = compiler.compile_file(file_to_run)
    return [comp_res, JAVARUN]
  end

  #@brief parse_compilation_error
  #@param error - compilation error, string
  #return compilation error as string without unnecessary data
  #NOT_MANDATORY
  def parse_compilation_error(error)
    parsed_error = error

    return parsed_error
  end

  #@brief parse_runtime_error
  #@param output - output, string
  #return tuple: is_err - boolean indicates if runtime error detected, output - the output as string (if no error - the original output, if error -  the edited error)
  #NOT_MANDATORY
  def parse_runtime_error(output)
    is_err = false
    final_out = output
    return is_err, final_out
  end


  #@brief get_func_name - get the required main function name for the input code
  #@param code - "raw" code to wrap
  #@return - the function name
  def get_func_name(code)
    func_name = ""
    paranthesis_index = code.index('(')
    i=1
    char = code[paranthesis_index-i]
    while char != ' '
      func_name += char
      i = i+1
      char = code[paranthesis_index-i]
    end
    func_name.reverse!
    return func_name
  end


  #@brief generate_code - generate code to compile/run (per programming language)
  #@param code - "raw" code to wrap
  #@param func_name - the required function name in the code
  #@param num_of_args - number of arguments for func_name
  #@param args_types - possible types for every argument
  #@return - generated code, ready for compilation
  def generate_code(input_code, func_name, num_of_args, args_types)
    # generate arguments list code
    args_list_code = generate_args_list_code(num_of_args)
    # class name
    generated_code = "class Simple{\n"
    # client's code
    generated_code += input_code + "\n\n"
    # import libraries
    #generated_code += "import sys\n\n"
    # main function - parse arguments and call the user function
    generated_code += generate_main_func_code(func_name, num_of_args, args_list_code, args_types)
    # call to main
    generated_code += "\n}"
    return generated_code
  end


  #@brief generate_main_func_code - generate main function code - definition, arguments parsing and call to required function
  #@param func_name - the required function name in the code
  #@param num_of_args - number of arguments for func_name
  #@param args_list_code - arguments with corret types  to call the reqruied function
  #@param args_types - possible types for every argument
  #@return - code of main function
  def generate_main_func_code(func_name, num_of_args, args_list_code, args_types)
    # start of main function
    caller_func_code = "public static void main(String args[]){\n"
    if num_of_args == 0
      # call to function without params
      caller_func_code += func_name + "()\n"
    else
      # get input length
      caller_func_code += "int num_of_args = args.length;\n\t"
      # preparing list of arguments
      #caller_func_code += "params = [None] * (num_of_args - 1)"
      # parse all arguments
      #args_parsing_code = parse_args(args_types)
      #caller_func_code += args_parsing_code
      # call to function with params
      caller_func_code += func_name + "(" + args_list_code + ");\n}"
    end
    return caller_func_code
  end

  #@brief parse_args
  #   parse arguments to required types
  #@param args_types - list of lists - first level contains every argument, second level contains all possible types for this argument
  #@return - parsing code for each argument
  def parse_args(args_types)
    num_of_args = args_types.length
    parsing_code = ""
    # for every argument
    for i in 0..num_of_args-1
      arg = args_types[i]
      parsing_code += arg.to_s" params[" + i.to_s() + "]"

    end
    return parsing_code
  end


  #@brief generate_args_list_code
  #   generate args list code to call the required function
  #@param num_of_args - number of arguments for func_name
  #@return - string of arguments in correct types
  def generate_args_list_code(num_of_args)
    params_list_str = "args[0]"
    for i in 1..num_of_args-1
      params_list_str += ", " "args[" + i.to_s + "]"
    end
    return params_list_str
  end


end