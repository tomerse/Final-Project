class Compiler

  PYNAME = "#{Rails.root}/lib/py_code.py"

  def self.compile_code(languagename, code)
    success = false
    print "Compiler.compile_code\n"
    if(languagename == 'python')
      success = PythonCompiler.compile_code(code)
    end
    return success
  end


  def self.run_code(languagename, code, args)
    code_res = ""
    print "Compiler.run_code\n"
    if(languagename == 'python')
      code_res = PythonCompiler.run_code(code, args)
    end
    return code_res
  end


end

