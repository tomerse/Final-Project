class Compiler

  PYNAME = "#{Rails.root}/lib/py_code.py"
  PYCODE = "print 1+2"

  def self.run_code(languagename, code)
    code_res = ""
    print 'Compiler.run_code'
    if(languagename == 'python')
      print "\n"
      #command = 'python -c "' + code + '"'
      #print command + "\n"
      #code_res = exec(command)
      #print code_res + "\n"

      #python_output = `python -c #{PYCODE}`
      #print python_output + "\n"
      #code_res = "#{python_output}"
      #print `The output from #{PYCODE} = #{python_output}\n`

      #puts "The output from #{PYNAME} is: #{python_output}\n"
      begin
        File.open(PYNAME, 'w'){|f| f.write code}
        # 2>&1 means redirecting stderr to stdout (to catch exceptions from Python code as well)
        python_output = `python #{PYNAME} 2>&1`
        code_res = "#{python_output}"
      rescue => ex
        print "\nException caught: " + ex.message
      end

    end
    return code_res
  end
end

