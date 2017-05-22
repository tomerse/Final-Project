module Compiler

  #@brief compile_file
  #@param filepath - path to file
  #@return compilation result
  def compile_file(filepath)
    raise NotImplementedError, "Implement this method in a child class"
  end



  #@brief run_file - run file with list of arguments
  #@param filepath - path to file
  #@param arg_list - arguments list as string
  #@param timeout - running timeout
  #@return running result
  def run_file(filepath, arg_list, timeout)
    raise NotImplementedError, "Implement this method in a child class"
  end

end