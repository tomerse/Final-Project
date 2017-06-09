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
    (is_err, output) = parse_runtime_error(output)
    return is_err, output
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
    if error == nil or (error <=> "") == 0
      return error
    end

    #error found, parsing it
    parsed_error = error
    #general info for compilation error
    info = Xml.get_element(@errors_file, 'comp_errors/general')

    #Syntax Error - remove the file name
    syntax_err_str = "SyntaxError"
    syntax_error = error.split(syntax_err_str + ":")[1]
    if syntax_error != nil and (syntax_error <=> "") != 0
      parsed_error = error.split(",")[1,]
      info = Xml.get_element(@errors_file, syntax_err_str.downcase)
      parsed_error +=  info
    else
      #Indentation Error - remove the file name
      indentation_err_str = "IndentationError"
      indentation_err = error.split(indentation_err_str + ":")[1]
      #if (error.split("(")[1] <=> "" ) != 0
      if indentation_err != nil and (indentation_err <=> "") != 0
        parsed_error = error.split("(")[0] + "("
        parenthesis = error.split("(")[1]
        parenthesis_no_file_name = parenthesis.split(", ")[1]
        parsed_error += parenthesis_no_file_name
        info = Xml.get_element(@errors_file, indentation_err_str.downcase)
        parsed_error +=  info
      else  #default message
        parsed_error +=  info
      end
    end


    return parsed_error
  end

  def parse_runtime_error(output)
    is_err = false
    final_out = output

    #NameError
    name_error_str = "NameError"
    name_error = output.split(name_error_str + ":")[1]
    if name_error != nil and (name_error <=> "") != 0
      is_err = true
      final_out = name_error
      info = Xml.get_element(@errors_file, name_error_str.downcase)
      final_out += "\n" + info
    else
      #TypeError
      type_error_str = "TypeError"
      type_error = output.split(type_error_str + ":")[1]
      if type_error != nil and (type_error <=> "") != 0
        is_err = true
        type_error = output.rpartition('line').last
        final_out = 'line ' + type_error_str
        info = Xml.get_element(@errors_file, type_error_str.downcase)
        final_out +=  "\n" + info
      else
        #ZeroDivisionError
        zero_error_str = "ZeroDivisionError"
        zero_error = output.split(zero_error_str + ":")[1]
        if zero_error != nil and (zero_error <=> "") != 0
          is_err = true
          zero_error = output.rpartition('line').last
          final_out = 'line ' + zero_error_str
          info = Xml.get_element(@errors_file, zero_error_str.downcase)
          final_out +=  "\n" + info
        else
          #ArithmeticError
          arithmetic_error_str = "ArithmeticError"
          arithmetic_error = output.split(arithmetic_error_str + ":")[1]
          if arithmetic_error != nil and (arithmetic_error <=> "") != 0
            is_err = true
            final_out = arithmetic_error
            info = Xml.get_element(@errors_file, arithmetic_error_str.downcase)
            final_out += "\n" + info
          end
         end
      end
    end

    #general info for runtime error
    if is_err == false
      general_error_str = "Traceback (most recent call last):"
      general_error = output.split(general_error_str)[1]
      if general_error != nil and (general_error <=> "") != 0
        is_err = true
        general_error = output.rpartition('line').last
        info = Xml.get_element(@errors_file, 'runtime_errors/general')
        final_out =  'line' + general_error + "\n" + info
      end
    end


    return is_err, final_out
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
      indentation_str = "\n"
      for j in 0..num_of_possible_types-2
        for k in 0..j
          indentation_str += "\t"
        end
        parsing_code += indentation_str + "try:"
        parsing_code += indentation_str + "\t" + "params[" + i.to_s() + "] = " + arg[j] + "(sys.argv[" + (i+1).to_s() +"])"
        parsing_code += indentation_str
        if j<num_of_possible_types-1
          parsing_code += "except:"
        else
          parsing_code += "try:"
        end
      end
      indentation_str += "\t"
      parsing_code += indentation_str

      parsing_code += "try:"
      parsing_code += indentation_str + "\t" + "params[" + i.to_s() + "] = " + arg[num_of_possible_types-1] + "(sys.argv[" + (i+1).to_s() +"])"
      parsing_code += indentation_str + "except:"
      parsing_code += indentation_str + "\t" + "params[" + i.to_s() + "] = " + "str"+ "(sys.argv[" + (i+1).to_s() +"])\n"
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