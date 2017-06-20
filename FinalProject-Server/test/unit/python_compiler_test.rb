require 'test_helper'

class PythonCompilerTest < ActiveSupport::TestCase

  TESTSUITE = 'PythonCompiler Unit Tests'
  NUMOFTESTS = 4
  Tsummary = TestsSummary.new NUMOFTESTS

  test "" do
    UTlog.execTestSuite TESTSUITE
  end

  def test_run_file_run_success
    UTlog.execUt 'PythonCompiler.run_file run success'
    args = 'suisa'
    begin
      exp = "suisa\n"
      act = PythonCompiler.run_file(PYCOMP_SUCC_INPUT, args)
      ans = act == exp
      if ans
        UTlog.pass
        Tsummary.passInc
      else
        UTlog.fail
        Tsummary.addFailure
      end
    rescue => ex
      UTlog.errorFail "Exception: #{ex.message}"
      Tsummary.addFailure
    end
  end

  def test_run_file_runtime_err
    UTlog.execUt 'PythonCompiler.run_file runtime error'
    args = 'suisa'
    begin
      exp ="#{args[0]}
Traceback (most recent call last):
  File \"/home/liorneg/Final-Project-server-local_13.3/FinalProject-Server/test/unit/compilers_tests_inputs/ex_1/pycomp_runtime_err.py\", line 16, in <module>
    main()
  File \"/home/liorneg/Final-Project-server-local_13.3/FinalProject-Server/test/unit/compilers_tests_inputs/ex_1/pycomp_runtime_err.py\", line 13, in main
    printName(str(params[0]))
  File \"/home/liorneg/Final-Project-server-local_13.3/FinalProject-Server/test/unit/compilers_tests_inputs/ex_1/pycomp_runtime_err.py\", line 5, in printName
    print 1/0
ZeroDivisionError: integer division or modulo by zero
"
      act = PythonCompiler.run_file(PYCOMP_RUNTIME_ERR_INPUT, args)
      ans = act == exp
      if ans
        UTlog.pass
        Tsummary.passInc
      else
        UTlog.fail
        Tsummary.addFailure
      end
    rescue => ex
      UTlog.errorFail "Exception: #{ex.message}"
      Tsummary.addFailure
    end
  end

  def test_run_file_inValid_args
    UTlog.execUt 'PythonCompiler.run_file inValid args'
    begin
      exp = "Traceback (most recent call last):
  File \"/home/liorneg/Final-Project-server-local_13.3/FinalProject-Server/test/unit/compilers_tests_inputs/ex_1/pycomp_success.py\", line 15, in <module>
    main()
  File \"/home/liorneg/Final-Project-server-local_13.3/FinalProject-Server/test/unit/compilers_tests_inputs/ex_1/pycomp_success.py\", line 12, in main
    printName(str(params[0]))
IndexError: list index out of range
"
      act = PythonCompiler.run_file(PYCOMP_SUCC_INPUT, nil)
      ans = act == exp
      if ans
        UTlog.pass
        Tsummary.passInc
      else
        UTlog.fail
        Tsummary.addFailure
      end
    rescue => ex
      UTlog.errorFail "Exception: #{ex.message}"
      Tsummary.addFailure
    end
  end

  def test_run_file_infinite_loop
    UTlog.execUt 'PythonCompiler.run_file infinite loop'
    args = 'suisa'
    begin
      exp = "process timeout error"
      act = PythonCompiler.run_file(PYCOMP_INFINITE_LOOP, args)
      ans = act == exp
      if ans
        UTlog.pass
        Tsummary.passInc
      else
        UTlog.fail
        Tsummary.addFailure
      end
    rescue => ex
      UTlog.errorFail "Exception: #{ex.message}"
      Tsummary.addFailure
    end
  end

  test "zzz" do
    summary = Tsummary.summary
    UTlog.execTestSuiteSummary TESTSUITE, summary
  end

end