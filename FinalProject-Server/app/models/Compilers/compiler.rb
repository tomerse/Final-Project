class Compiler

  PYNAME = "#{Rails.root}/lib/py_code.py"

  #@brief compiling code per language
  #@param language_name - course programming language
  #@param course_name - course name
  #@param code - the code to compile
  #@param ex_id - exercise id
  #@return list with two elements : success/failure and the compilation error (or empty string)
  def self.compile_code(language_name, course_name, code, ex_id)
    ans = ""
    print "Compiler.compile_code\n"
    if(language_name == 'python')
      ans = PythonCompiler.compile_code(code)
    end
    #building compilation answer
    if !ans.nil?
      compilation_passed = ans[0]
      if compilation_passed == false
        ans[0] = "compilation error"
      else
        tests_passed = true#TestsRunner.run(language_name, course_name, ex_id)
        if tests_passed == false
          ans[0] = "tests failed"
        else
          ans[0] = "success"
          ans[1] = []
        end
      end
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

