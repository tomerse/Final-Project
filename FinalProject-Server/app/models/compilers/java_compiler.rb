class PythonCompiler
  include Compiler

  require 'timeout'



  #@brief compile_file
  #@param filepath - path to file
  #@return compilation result
  def compile_file(filepath)
    begin
      # 2>&1 means redirecting stderr to stdout (to catch exceptions from Python code as well)
      code_res = `python -m py_compile #{filepath} 2>&1`
    rescue => ex
      print "\nException caught in file compilation: " + filepath + ". Error: " + ex.message + "/n"
    end
    return code_res
  end



  #@brief run_file - run file with list of arguments
  #@param filepath - path to file
  #@param arg_list - arguments list as string
  #@param timeout - running timeout
  #@return running result
  def run_file(filepath, arg_list, timeout)
    code_res = 'process timeout error'
    begin
      start_time = Time.now
      Timeout.timeout(timeout) do
        # 2>&1 means redirecting stderr to stdout (to catch exceptions from Python code as well)
        code_res = `python #{filepath} #{arg_list} 2>&1`
        break if Time.now < start_time + timeout
      end
    rescue => ex
      print "\nException caught in file running: " + filepath + ". Error: " + ex.message + "/n"
    end
    return code_res
  end

end