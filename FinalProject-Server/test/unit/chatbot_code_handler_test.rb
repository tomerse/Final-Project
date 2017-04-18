require 'test_helper'

class ChatbotCodeHandlerTest < ActiveSupport::TestCase

  TESTSUITE = 'ChatbotCodeHandler Unit Tests'
  NUMOFTESTS = 14
  Tsummary = TestsSummary.new NUMOFTESTS

  test "" do
    Tlog.execTestSuite TESTSUITE
  end

  def test_check_exercise_code_comp_success
    Tlog.execUt('ChatbotCodeHandler.check_exercise_code comp success')
    begin
      code = ActiveSupport::TestCase.read_test_input COMP_SUCC_INPUT
      code_handler = CourseFactory.get_code_handler(COURSEFOLDER, PROGLANGUAGE)
      exercise_file = CourseFactory.get_exercise_file(COURSEFOLDER, PROGLANGUAGE, 1)
      (success, error)  = code_handler.check_exercise_code(code, exercise_file)
      exp_ans ='success'
      ans = exp_ans == success
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

  def test_check_exercise_code_comp_error
    Tlog.execUt('ChatbotCodeHandler.check_exercise_code comp error')
    begin
      code = ActiveSupport::TestCase.read_test_input COMP_ERR_INPUT
      code_handler = CourseFactory.get_code_handler(COURSEFOLDER, PROGLANGUAGE)
      exercise_file = CourseFactory.get_exercise_file(COURSEFOLDER, PROGLANGUAGE, 1)
      (success, error)  = code_handler.check_exercise_code(code, exercise_file)
      exp_ans ='compilation error'
      ans = exp_ans == success
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

  def test_check_exercise_code_run_time_err
    Tlog.execUt('ChatbotCodeHandler.check_exercise_code run time error')
    begin
      code = ActiveSupport::TestCase.read_test_input COMP_RUNTIME_ERR_INPUT
      code_handler = CourseFactory.get_code_handler(COURSEFOLDER, PROGLANGUAGE)
      exercise_file = CourseFactory.get_exercise_file(COURSEFOLDER, PROGLANGUAGE, 1)
      (success, error)  = code_handler.check_exercise_code(code, exercise_file)
      exp_ans ='tests failed'
      ans = exp_ans == success
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

  def test_check_exercise_invalid_code
    Tlog.execUt('ChatbotCodeHandler.check_exercise_code invalid code')
    begin
      code_handler = CourseFactory.get_code_handler(COURSEFOLDER, PROGLANGUAGE)
      exercise_file = CourseFactory.get_exercise_file(COURSEFOLDER, PROGLANGUAGE, 1)
      (success, error)  = code_handler.check_exercise_code(nil, exercise_file)
      Tlog.fail
      Tsummary.addFailure
    rescue => ex
      Tlog.pass
      Tsummary.passInc
    end
  end


  def test_check_exercise_code_invalid_progLang
    Tlog.execUt('ChatbotCodeHandler.check_exercise_code invalid progLang')
    begin
      code = ActiveSupport::TestCase.read_test_input COMP_SUCC_INPUT
      code_handler = CourseFactory.get_code_handler(COURSEFOLDER, PROGLANGUAGE)
      exercise_file = CourseFactory.get_exercise_file(COURSEFOLDER, nil, 1)
      (success, error)  = code_handler.check_exercise_code(code, exercise_file)
      Tlog.fail
      Tsummary.addFailure
    end
    rescue => ex
      Tlog.pass
      Tsummary.passInc
  end

  def test_check_exercise_code_invalid_course
    Tlog.execUt('ChatbotCodeHandler.check_exercise_code invalid course')
    begin
      code = ActiveSupport::TestCase.read_test_input COMP_SUCC_INPUT
      code_handler = CourseFactory.get_code_handler(COURSEFOLDER, PROGLANGUAGE)
      exercise_file = CourseFactory.get_exercise_file(nil, PROGLANGUAGE, 1)
      (success, error)  = code_handler.check_exercise_code(code, exercise_file)
      Tlog.fail
      summary.addFailure
    rescue => ex
      Tlog.pass
      Tsummary.passInc
    end
  end

  def test_check_exercise_code_func_call
    Tlog.execUt('ChatbotCodeHandler.check_exercise_code func call')
    begin
      ans = false
      code = ActiveSupport::TestCase.read_test_input COMP_FUNC_CALL
      code_handler = CourseFactory.get_code_handler(COURSEFOLDER, PROGLANGUAGE)
      exercise_file = CourseFactory.get_exercise_file(COURSEFOLDER, PROGLANGUAGE, 1)
      (success, error) = code_handler.check_exercise_code(code, exercise_file)
      if success == "success" and error == ""
        ans = true
      end
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

  def test_run_exercise_code_valid_args
    Tlog.execUt('ChatbotCodeHandler.run_exercise_code valid args')
    begin
      code = ActiveSupport::TestCase.read_test_input COMP_SUCC_INPUT
      args = ['suisa']
      code_handler = CourseFactory.get_code_handler(COURSEFOLDER, PROGLANGUAGE)
      exercise_file = CourseFactory.get_exercise_file(COURSEFOLDER, PROGLANGUAGE, 1)
      act = code_handler.run_exercise_code(code, args, exercise_file)
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

  def test_run_exercise_code_string_with_space
    Tlog.execUt('ChatbotCodeHandler.run_exercise_code string with space')
    begin
      code = ActiveSupport::TestCase.read_test_input COMP_SUCC_INPUT
      args = ['suisa fiz gabi segal']
      code_handler = CourseFactory.get_code_handler(COURSEFOLDER, PROGLANGUAGE)
      exercise_file = CourseFactory.get_exercise_file(COURSEFOLDER, PROGLANGUAGE, 1)
      act = code_handler.run_exercise_code(code, args, exercise_file)
      exp = "suisa fiz gabi segal\n"
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

  def test_run_exercise_code_run_time_err
    Tlog.execUt('ChatbotCodeHandler.run_exercise_code run time error')
    begin
      code = ActiveSupport::TestCase.read_test_input COMP_RUNTIME_ERR_INPUT
      args = ['suisa']
      code_handler = CourseFactory.get_code_handler(COURSEFOLDER, PROGLANGUAGE)
      exercise_file = CourseFactory.get_exercise_file(COURSEFOLDER, PROGLANGUAGE, 1)
      act = code_handler.run_exercise_code(code, args, exercise_file)
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

  def test_run_exercise_code_invalid_exercise
    Tlog.execUt('ChatbotCodeHandler.run_exercise_code invalid exercise')
    begin
      args = ['suisa']
      code = ActiveSupport::TestCase.read_test_input COMP_SUCC_INPUT
      code_handler = CourseFactory.get_code_handler(COURSEFOLDER, PROGLANGUAGE)
      comp_ans = code_handler.run_exercise_code(code, args, nil)
      Tlog.fail
      Tsummary.addFailure
    rescue => ex
      Tlog.pass
      Tsummary.passInc
    end
  end


  def test_run_exercise_code_invalid_args
    Tlog.execUt('ChatbotCodeHandler.run_exercise_code invalid args')
    begin
      code = ActiveSupport::TestCase.read_test_input COMP_SUCC_INPUT
      code_handler = CourseFactory.get_code_handler(COURSEFOLDER, PROGLANGUAGE)
      exercise_file = CourseFactory.get_exercise_file(COURSEFOLDER, PROGLANGUAGE, 1)
      comp_ans = code_handler.run_exercise_code(code, nil, exercise_file)
      Tlog.fail
      Tsummary.addFailure
    rescue => ex
      Tlog.pass
      Tsummary.passInc
    end
  end

  def test_run_exercise_code_invalid_code
    Tlog.execUt('ChatbotCodeHandler.run_exercise_code invalid code')
    begin
      args = ['suisa']
      code = ActiveSupport::TestCase.read_test_input COMP_SUCC_INPUT
      code_handler = CourseFactory.get_code_handler(COURSEFOLDER, PROGLANGUAGE)
      exercise_file = CourseFactory.get_exercise_file(COURSEFOLDER, PROGLANGUAGE, 1)
      comp_ans = code_handler.run_exercise_code(mil, args, exercise_file)
      Tlog.fail
      Tsummary.addFailure
    rescue => ex
      Tlog.pass
      Tsummary.passInc
    end
  end

  def test_run_func_call
    Tlog.execUt('ChatbotCodeHandler.run_exercise_code func call')
    begin
      args = ['fizzz']
      code = ActiveSupport::TestCase.read_test_input COMP_FUNC_CALL
      code_handler = CourseFactory.get_code_handler(COURSEFOLDER, PROGLANGUAGE)
      exercise_file = CourseFactory.get_exercise_file(COURSEFOLDER, PROGLANGUAGE, 1)
      ans = code_handler.run_exercise_code(code, args, exercise_file)
      exp = "fizzz\n"
      ans = ans == exp
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