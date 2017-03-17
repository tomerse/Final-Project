require 'test_helper'

class CompilerTest < ActiveSupport::TestCase

  TESTSUITE = 'Compiler Unit Tests'
  NUMOFTESTS = 11
  Tsummary = TestsSummary.new NUMOFTESTS

  test "" do
    Tlog.execTestSuite TESTSUITE
  end

  def test_compile_code_comp_success
    Tlog.execUt('Compiler.compile_code comp success')
    begin
      code = ActiveSupport::TestCase.read_test_input COMP_SUCC_INPUT
      comp_ans = Compiler.compile_code(PROGLANGUAGE,COURSEFOLDER,code,1)
      exp_ans ='success'
      ans = exp_ans == comp_ans[0]
      if ans
        Tlog.pass
        Tsummary.passInc
      else
        Tlog.fail
        Tsummary.addFailure
      end
    rescue => ex
      Tlog.errorFail "Exception: #{ex.message}"
      Tsummary.addFailure
    end
  end

  def test_compile_code_comp_error
    Tlog.execUt('Compiler.compile_code comp error')
    begin
      code = ActiveSupport::TestCase.read_test_input COMP_ERR_INPUT
      comp_ans = Compiler.compile_code(PROGLANGUAGE,COURSEFOLDER,code,1)
      exp_ans ='compilation error'
      ans = exp_ans == comp_ans[0]
      if ans
        Tlog.pass
        Tsummary.passInc
      else
        Tlog.fail
        Tsummary.addFailure
      end
    rescue => ex
      Tlog.errorFail "Exception: #{ex.message}"
      Tsummary.addFailure
    end
  end

  def test_compile_code_run_time_err
    Tlog.execUt('Compiler.compile_code run time error')
    begin
      code = ActiveSupport::TestCase.read_test_input COMP_RUNTIME_ERR_INPUT
      comp_ans = Compiler.compile_code(PROGLANGUAGE,COURSEFOLDER,code,1)
      exp_ans ='tests failed'
      ans = exp_ans == comp_ans[0]
      if ans
        Tlog.pass
        Tsummary.passInc
      else
        Tlog.fail
        Tsummary.addFailure
      end
    rescue => ex
      Tlog.errorFail "Exception: #{ex.message}"
      Tsummary.addFailure
    end
  end

  def test_compile_code_invalid_code
    Tlog.execUt('Compiler.compile_code invalid code')
    begin
      comp_ans = Compiler.compile_code(PROGLANGUAGE,COURSEFOLDER,nil,1)
      ans = comp_ans.nil?
      if ans
        Tlog.pass
        Tsummary.passInc
      else
        Tlog.fail
        Tsummary.addFailure
      end
    rescue => ex
      Tlog.errorFail "Exception: #{ex.message}"
      Tsummary.addFailure
    end
  end


  def test_compile_code_invalid_progLang
    Tlog.execUt('Compiler.compile_code invalid progLang')
    begin
      code = ActiveSupport::TestCase.read_test_input COMP_SUCC_INPUT
      comp_ans = Compiler.compile_code(nil,COURSEFOLDER,code,1)
      ans = comp_ans.nil?
      if ans
        Tlog.pass
        Tsummary.passInc
      else
        Tlog.fail
        Tsummary.addFailure
      end
    rescue => ex
      Tlog.errorFail "Exception: #{ex.message}"
      Tsummary.addFailure
    end
  end

  def test_compile_code_invalid_course
    Tlog.execUt('Compiler.compile_code invalid course')
    begin
      code = ActiveSupport::TestCase.read_test_input COMP_SUCC_INPUT
      comp_ans = Compiler.compile_code(PROGLANGUAGE,nil,code,1)
      ans = comp_ans.nil?
      if ans
        Tlog.pass
        Tsummary.passInc
      else
        Tlog.fail
        Tsummary.addFailure
      end
    rescue => ex
      Tlog.errorFail "Exception: #{ex.message}"
      Tsummary.addFailure
    end
  end

  def test_run_code_valid_args
    Tlog.execUt('Compiler.run_code valid args')
    begin
      code = ActiveSupport::TestCase.read_test_input COMP_SUCC_INPUT
      act = Compiler.run_code(PROGLANGUAGE,COURSEFOLDER,1,code,['suisa'])
      exp = "suisa\n"
      ans = act == exp
      if ans
        Tlog.pass
        Tsummary.passInc
      else
        Tlog.fail
        Tsummary.addFailure
      end
    rescue => ex
      Tlog.errorFail "Exception: #{ex.message}"
      Tsummary.addFailure
    end
  end

  def test_run_code_run_time_err
    Tlog.execUt('Compiler.run_code run time error')
    begin
      code = ActiveSupport::TestCase.read_test_input COMP_RUNTIME_ERR_INPUT
      args = ['suisa']
      act = Compiler.run_code(PROGLANGUAGE,COURSEFOLDER,1,code,args)
      exp ="#{args[0]}
Traceback (most recent call last):
  File \"/home/liorneg/Final-Project-server-local_13.3/FinalProject-Server/lib/py_code.py\", line 16, in <module>
    main()
  File \"/home/liorneg/Final-Project-server-local_13.3/FinalProject-Server/lib/py_code.py\", line 13, in main
    printName(str(params[0]))
  File \"/home/liorneg/Final-Project-server-local_13.3/FinalProject-Server/lib/py_code.py\", line 5, in printName
    print 1/0
ZeroDivisionError: integer division or modulo by zero
"
      ans = act == exp
      if ans
        Tlog.pass
        Tsummary.passInc
      else
        Tlog.fail
        Tsummary.addFailure
      end
    rescue => ex
      Tlog.errorFail "Exception: #{ex.message}"
      Tsummary.addFailure
    end
  end

  def test_run_code_invalid_code
    Tlog.execUt('Compiler.run_code invalid code')
    begin
      args = ['suisa']
      comp_ans = Compiler.run_code(PROGLANGUAGE,COURSEFOLDER,nil,1,args)
      ans = comp_ans == ""
      if ans
        Tlog.pass
        Tsummary.passInc
      else
        Tlog.fail
        Tsummary.addFailure
      end
    rescue => ex
      Tlog.errorFail "Exception: #{ex.message}"
      Tsummary.addFailure
    end
  end


  def test_run_code_invalid_progLang
    Tlog.execUt('Compiler.run_code invalid progLang')
    begin
      args = ['suisa']
      code = ActiveSupport::TestCase.read_test_input COMP_SUCC_INPUT
      comp_ans = Compiler.run_code(nil,COURSEFOLDER,code,1,args)
      ans = comp_ans == ""
      if ans
        Tlog.pass
        Tsummary.passInc
      else
        Tlog.fail
        Tsummary.addFailure
      end
    rescue => ex
      Tlog.errorFail "Exception: #{ex.message}"
      Tsummary.addFailure
    end
  end

  def test_run_code_invalid_course
    Tlog.execUt('Compiler.run_code invalid course')
    begin
      args = ['suisa']
      code = ActiveSupport::TestCase.read_test_input COMP_SUCC_INPUT
      comp_ans = Compiler.run_code(PROGLANGUAGE,nil,1,code,args)
      ans = comp_ans == ""
      if ans
        Tlog.pass
        Tsummary.passInc
      else
        Tlog.fail
        Tsummary.addFailure
      end
    rescue => ex
      Tlog.errorFail "Exception: #{ex.message}"
      Tsummary.addFailure
    end
  end

  test "zzz" do
    summary = Tsummary.summary
    Tlog.execTestSuiteSummary TESTSUITE, summary
  end

end