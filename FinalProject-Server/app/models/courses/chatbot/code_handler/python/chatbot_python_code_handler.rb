require 'compilers/python_compiler'
class ChatbotPythonCodeHandler < ChatbotCodeHandler

  PYNAME = "#{Rails.root}/lib/py_code.py"



  def execute_code(generated_code, args_list)
    File.open(PYNAME, 'w'){|f| f.write generated_code}
    output = execute_file(PYNAME, args_list)
    return output
  end

  def execute_file(file_to_run, args_list)
    compiler = PythonCompiler.new
    output = compiler.run_file(file_to_run, args_list, CHATBOT_RUNNING_TIMEOUT)
    return output
  end

  def compile_code(generated_code)
    File.open(PYNAME, 'w'){|f| f.write generated_code}
    (comp_res, file_to_run) = compile_file(PYNAME)
    comp_res = parse_compilation_error(comp_res)
    return [comp_res, file_to_run]
  end

  def compile_file(file_to_run)
    compiler = PythonCompiler.new
    comp_res = compiler.compile_file(file_to_run)
    return [comp_res, file_to_run]
  end

  def parse_compilation_error(error)
    parsed_error = error
    if (error <=> "") != 0
      #Syntax Error - remove the file name
      if (error.split(" ")[0] <=> "File" ) == 0
        parsed_error = error.split(",")[1,]
      else
        #Indentation Error - remove the file name
        if (error.split("(")[1] <=> "" ) != 0
          parsed_error = error.split("(")[0] + "("
          parenthesis = error.split("(")[1]
          parenthesis_no_file_name = parenthesis.split(", ")[1]
          parsed_error += parenthesis_no_file_name
        end
      end

    end
    return parsed_error
  end


  def get_func_name(code)
    func_name = ""
    parsed_code = code.split(/\W+/)
    if (parsed_code[0] <=> "def") == 0
      func_name = parsed_code[1]
    end
    return func_name
  end


  def generate_code(input_code, func_name, num_of_args, args_types)
    # generate arguments list code
    args_list_code = generate_args_list_code(num_of_args)
    # client's code
    generated_code = input_code + "\n\n"
    # import libraries
    generated_code += "import sys\n\n"
    # main function - parse arguments and call the user function
    generated_code += generate_main_func_code(func_name, num_of_args, args_list_code, args_types)
    # call to main
    generated_code += "\nif __name__ == \"__main__\":\n\tmain()"
    return generated_code
  end


  def generate_main_func_code(func_name, num_of_args, args_list_code, args_types)
    # start of main function
    caller_func_code = "def main():\n\t"
    if num_of_args == 0
      # call to function without params
      caller_func_code += func_name + "()\n"
    else
      # get input length
      caller_func_code += "num_of_args = len(sys.argv)\n\t"
      # preparing list of arguments
      caller_func_code += "params = [None] * (num_of_args - 1)"
      # parse all arguments
      args_parsing_code = parse_args(args_types)
      caller_func_code += args_parsing_code
      # call to function with params
      caller_func_code += "\t" + func_name + "(" + args_list_code + ")\n"
    end
    return caller_func_code
  end

  def parse_args(args_types)
    num_of_args = args_types.length
    parsing_code = ""
    # for every argument
    for i in 0..num_of_args-1
      arg = args_types[i]
      # for every possible type of the argument
      num_of_possible_types = arg.length
      for j in 0..num_of_possible_types-2
        if j==0
          parsing_code += "\n\ttry:"
        end
        parsing_code += "\n\t\tparams[" + i.to_s() + "] = " + arg[j] + "(sys.argv[" + (i+1).to_s() +"])\n\t"
        if j<num_of_possible_types-1
          parsing_code += "except:"
        else
          parsing_code += "try:"
        end
      end
      if num_of_possible_types>1
        parsing_code += "\n\t\t"
      else
        parsing_code += "\n\t"
      end
      parsing_code += "params[" + i.to_s() + "] = " + arg[num_of_possible_types-1] + "(sys.argv[" + (i+1).to_s() +"])\n"
    end
    return parsing_code
  end


  def generate_args_list_code(num_of_args)
    params_list_str = "params[0]"
    for i in 1..num_of_args-1
      params_list_str += ", " "params[" + i.to_s + "]"
    end
    return params_list_str
  end


end