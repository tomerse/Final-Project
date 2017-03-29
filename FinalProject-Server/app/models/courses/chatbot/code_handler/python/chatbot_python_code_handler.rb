require 'compilers/python_compiler'
class ChatbotPythonCodeHandler < ChatbotCodeHandler

  PYNAME = "#{Rails.root}/lib/py_code.py"



  def execute_code(generated_code, args_list)
    File.open(PYNAME, 'w'){|f| f.write generated_code}
    output = execute_file(PYNAME, args_list)
    return output
  end

  def execute_file(file_to_run, args_list)
    output = PythonCompiler.run_file(file_to_run, args_list)
    return output
  end

  def compile_code(generated_code)
    File.open(PYNAME, 'w'){|f| f.write generated_code}
    retval = compile_file(PYNAME)
    return retval
  end

  def compile_file(file_to_run)
    comp_res = PythonCompiler.compile_file(file_to_run)
    retval = [comp_res, file_to_run]
    return retval
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
    args_list_code = generate_args_list_code(num_of_args, args_types)
    # import libraries
    generated_code = "import sys\n\n"
    # client's code
    generated_code += input_code + "\n\n"
    # main function - parse arguments and call the user function
    generated_code += generate_main_func_code(func_name, num_of_args, args_list_code)
    # call to main
    generated_code += "\nif __name__ == \"__main__\":\n\tmain()"
    return generated_code
  end


  def generate_main_func_code(func_name, num_of_args, args_list_code)
    # start of main function
    caller_func_code = "def main():\n\t"
    if num_of_args == 0
      # call to function without params
      caller_func_code += func_name + "()\n"
    else
      # get input length
      caller_func_code += "num_of_args = len(sys.argv)\n\t"
      # preparing list of arguments
      caller_func_code += "params = [None] * (num_of_args -1)\n\tfor i in range(1,num_of_args):\n\t\tparams[i-1]=sys.argv[i]\n"
      # call to function with params
      caller_func_code += "\t" + func_name + "(" + args_list_code + ")\n"
    end
    return caller_func_code
  end

  #Creating the args list - in Python, every argument should be casted to the required type
  #TODO: concatenate the remaining types in arg_types_list!
  def generate_args_list_code(num_of_args, args_types)
    arg_types_list = args_types[0]
    params_list_str = arg_types_list[0] + "(params[0])"
    for i in 1..num_of_args-1
      arg_types_list = args_types[i]
      length = arg_types_list.length
      params_list_str += ", " + arg_types_list[0] + "(params[" + i.to_s + "])"
    end
    return params_list_str
  end


end