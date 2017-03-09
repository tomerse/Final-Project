class PythonCompiler

  PYNAME = "#{Rails.root}/lib/py_code.py"

  # @brief Get Python code of function and list of arguments, generate parser with relevant number of arguments and run it with args
  # @param code - Python code of function
  # @param args - list of arguments
  # @return code output
  def self.run_code(code, args)
    num_of_args = 0
    args_list = ""
    if !args.nil?
      num_of_args = args.length
      # build arguments list
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
      generated_code = self.generate_python_code(code,func_name,num_of_args)
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
  def self.generate_python_code(code, func_name, num_of_args)
    # generate arguments list code
    args_list_code = generate_args_list_code(num_of_args)
    # import libraries
    generated_code = "import sys\n\n"
    # client's code
    generated_code += code + "\n\n"
    # start of main function
    generated_code += "def main():\n\tnum_of_args = len(sys.argv)\n\tif num_of_args==1:\n\t\t"
    # call to function without params
    generated_code += func_name + "()\n\t\treturn\n\t"
    # main function
    generated_code += "params = [None] * (num_of_args -1)\n\tfor i in range(1,num_of_args):\n\t\tparams[i-1]=sys.argv[i]\n"
    # call to function with params
    generated_code += "\t" + func_name + "(" + args_list_code + ")\n"
    # call to main
    generated_code += "\nif __name__ == \"__main__\":\n\tmain()"
    return generated_code

  end

  #Generate list of arguments code to send
  def self.generate_args_list_code(num_of_args)
    params_list_str = ""
    if num_of_args > 0
      params_list_str = "params[0]"
      if num_of_args > 1
        for i in 1..num_of_args-1
          params_list_str += ", params[" + i.to_s() + "]"
        end
      end
    end
    return params_list_str
  end




  # @brief Get any Python code and compile it
  # @param code - Python code
  # @return Compilation success/failure
  def self.compile_code(code)
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
    return success
  end

end