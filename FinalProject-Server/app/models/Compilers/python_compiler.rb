class PythonCompiler

  PYNAME = "#{Rails.root}/lib/py_code.py"


  def self.run_file(file_to_run, args)
    args_list = ""
    num_of_args = 0
    if !args.nil?
      num_of_args = args.length
      # build arguments names as string & arguments types list
      args_list = args[0]
      if num_of_args > 1
        for i in 1..num_of_args-1
          args_list += " " + args[i]
        end
      end
    end
    # Running the code
    begin
      # 2>&1 means redirecting stderr to stdout (to catch exceptions from Python code as well)
      code_res = `python #{file_to_run} #{args_list} 2>&1`
    rescue => ex
      print "\nException caught: " + ex.message
    end
    return code_res
  end

  # @brief Get Python code of function and list of arguments, generate parser with relevant number of arguments and run it with args
  # @param code - Python code of function
  # @param args - list of arguments
  # @param args_types - list of arguments types
  # @return code output
  def self.run_code(code, args, args_types)
    num_of_args = 0
    args_list = ""
    if !args.nil?
      num_of_args = args.length
      # build arguments names as string & arguments types list
      args_list = args[0].to_s()
      if num_of_args > 1
        for i in 1..num_of_args-1
          args_list += " " + args[i].to_s()
        end
      end
    end
    func_name = get_func_name(code)
    generated_code = code
    if (func_name <=> "") != 0
      generated_code = self.generate_python_code(code,func_name,num_of_args,args_types)
    end
    # Running the code
    begin
      File.open(PYNAME, 'w'){|f| f.write generated_code}
      # 2>&1 means redirecting stderr to stdout (to catch exceptions from Python code as well)
      python_output = `python #{PYNAME} #{args_list} 2>&1`
      code_res = "#{python_output}"
    rescue => ex
      print "\nException caught: " + ex.message
    end
  end

  # Return the function name from its code
  def self.get_func_name(code)
    func_name = ""
    parsed_code = code.split(/\W+/)
    if (parsed_code[0] <=> "def") == 0
      func_name = parsed_code[1]
    end
    return func_name
  end


  #Generate the Python code with args parser
  def self.generate_python_code(input_code, func_name, num_of_args, args_types)
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

  #Parse arguments and call the user function
  def self.generate_main_func_code(func_name, num_of_args, args_list_code)
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

  #Generate list of arguments code to send with casting to their expected types
  def self.generate_args_list_code(num_of_args, args_types)
    params_list_str = ""
    if num_of_args > 0
      params_list_str = args_types[0] + "(params[0])"
      if num_of_args > 1
        for i in 1..num_of_args-1
          params_list_str += ", " + args_types[i] + "(params[" + i.to_s() + "])"
        end
      end
    end
    return params_list_str
  end




  # @brief Get any Python code and compile it
  # @param code - Python code
  # @return Compilation success/failure
  def self.compile_code(code, args_types)
    success = false
    code_res = ""
    begin
      File.open(PYNAME, 'w'){|f| f.write code}
      # 2>&1 means redirecting stderr to stdout (to catch exceptions from Python code as well)
      python_output = `python #{PYNAME} 2>&1`
      code_res = "#{python_output}"
    rescue => ex
      print "\nException caught: " + ex.message
    end
    if (code_res <=> "") == 0
      success = true
    end
    return [success, code_res]
  end

  # @brief Get any Python code and compile it
  # @param code - Python code
  # @return list - Compilation success/failure ,the error itself (or empty string) and the compilation file name
  def self.compile_code(code, args_types)
    success = false
    code_res = ""
    num_of_args = args_types.length
    func_name = get_func_name(code)
    generated_code = code
    if (func_name <=> "") != 0
      generated_code = self.generate_python_code(code,func_name,num_of_args,args_types)
    end
    begin
      File.open(PYNAME, 'w'){|f| f.write generated_code}
      # 2>&1 means redirecting stderr to stdout (to catch exceptions from Python code as well) - compilation only without exectuing
      python_output = `python -m py_compile #{PYNAME} 2>&1`
      code_res = "#{python_output}"
    rescue => ex
      print "\nException caught: " + ex.message
    end
    if (code_res <=> "") == 0
      success = true
    end
    return [success, code_res, PYNAME]
  end



end