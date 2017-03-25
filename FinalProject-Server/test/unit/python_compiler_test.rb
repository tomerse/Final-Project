require 'test_helper'

class PythonCompilerTest < ActiveSupport::TestCase

  TESTSUITE = 'PythonCompiler Unit Tests'
  NUMOFTESTS = 3
  Tsummary = TestsSummary.new NUMOFTESTS

  test "" do
    Tlog.execTestSuite TESTSUITE
  end

  def test_run_file_run_success
    Tlog.execUt 'PythonCompiler.run_file run success'
    args = 'suisa'
    begin
      exp = "suisa\n"
      act = PythonCompiler.run_file(PYCOMP_SUCC_INPUT, args)
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

  def test_run_file_runtime_err
    Tlog.execUt 'PythonCompiler.run_file runtime error'
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

  def test_run_file_inValid_args
    Tlog.execUt 'PythonCompiler.run_file inValid args'
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