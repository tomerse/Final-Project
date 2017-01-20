class Compiler

  require 'Compilers/Python/skulpt/skulpt'

  def self.run_code(languagename, code)
    print 'Compiler.run_code'
    if(languagename == 'python')

      Skulpt.run_code(code)
    end
  end
end

