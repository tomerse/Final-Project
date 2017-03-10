class Compiler

  PYNAME = "#{Rails.root}/lib/py_code.py"

  #@brief compiling code per language
  #@param language_name - course programming language
  #@param code - the code to compile
  #@return list with two elements : success/failure and the compilation error (or empty string)
  def self.compile_code(language_name, code)
    ans = ""
    print "Compiler.compile_code\n"
    if(language_name == 'python')
      ans = PythonCompiler.compile_code(code)
    end
    return ans
  end


  #@brief compiling and running code per language with list of arguments
  #@param language_name - course programming language
  #@param code - the code to compile
  #@param args - list of arguments
  #@return output of the code
  def self.run_code(language_name, code, args)
    code_res = ""
    print "Compiler.run_code\n"
    if(language_name == 'python')
      code_res = PythonCompiler.run_code(code, args)
    end
    return code_res
  end


end

