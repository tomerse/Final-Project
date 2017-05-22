class PythonCompiler
  include Compiler

  require 'timeout'




  def compile_file(filepath)
    begin
      # 2>&1 means redirecting stderr to stdout (to catch exceptions from Python code as well)
      code_res = `python -m py_compile #{filepath} 2>&1`
    rescue => ex
      print "\nException caught in file compilation: " + filepath + ". Error: " + ex.message + "/n"
    end
    return code_res
  end




  def run_file(filepath, arg_list)
    code_res = 'process timeout error'
    begin
      start_time = Time.now
      Timeout.timeout(RUNNING_TIMEOUT) do
      # 2>&1 means redirecting stderr to stdout (to catch exceptions from Python code as well)
      code_res = `python #{filepath} #{arg_list} 2>&1`
        break if Time.now < start_time + RUNNING_TIMEOUT
      end
    rescue => ex
      print "\nException caught in file running: " + filepath + ". Error: " + ex.message + "/n"
    end
    return code_res
  end

end