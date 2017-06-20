ENV["RAILS_ENV"] = "test"
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'test_log'
require 'tests_summary'
require 'net/http'


class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.(yml|csv) for all tests in alphabetical order.
  #
  # Note: You'll currently still have to declare fixtures explicitly in integration tests
  # -- they do not yet inherit this setting
  #fixtures :all
  # Add more helper methods to be used by all tests here...



  # ***** UT Section *****
  COURSESESFOLDER = 'lib/assets/courses'
  EXERCISESFOLDER = 'exercises'
  PROGLANGUAGE = 'python'
  COURSEFOLDER = 'chatbot'
  FILENAME = 'exercise_1'
  EXTENSION = '.xml'
  FILEPATH = File.join(COURSESESFOLDER,COURSEFOLDER,EXERCISESFOLDER,PROGLANGUAGE,FILENAME+EXTENSION)
  EXML = File.absolute_path(FILEPATH)
  COMP_SUCC_INPUT = File.absolute_path('test/unit/compilers_tests_inputs/ex_1/comp_success.py')
  COMP_FUNC_CALL = File.absolute_path('test/unit/compilers_tests_inputs/ex_1/func_call.py')
  COMP_ERR_INPUT = File.absolute_path('test/unit/compilers_tests_inputs/ex_1/comp_error.py')
  COMP_RUNTIME_ERR_INPUT = File.absolute_path('test/unit/compilers_tests_inputs/ex_1/comp_run_time_err.py')
  PYCOMP_SUCC_INPUT = File.absolute_path('test/unit/compilers_tests_inputs/ex_1/pycomp_success.py')
  PYCOMP_RUNTIME_ERR_INPUT = File.absolute_path('test/unit/compilers_tests_inputs/ex_1/pycomp_runtime_err.py')
  PYCOMP_INFINITE_LOOP = File.absolute_path('test/unit/compilers_tests_inputs/ex_1/comp_infinite.py')
  UTlog = TestLog.new 'test/unit/unit_tests_resutls.log'

  def read_test_input(path)
    if File.readable? path
      text = File.read path
      return text
      else return nil
    end
  end
  # ***** UT Section *****

  # ***** PerformanceTests Section *****
    APP_URL = 'http://finalprojectcm.herokuapp.com'
    COURSE_REQ_URL = "#{APP_URL}/#/course/${prog_lang}/${course_name}/stage/${stage_id}"
    COMP_REQ_URL = "#{APP_URL}/courses/${prog_lang}/${course_name}/${stage_id}/compile"
    RUN_REQ_URL = "#{APP_URL}/courses/${prog_lang}/${course_name}/${stage_id}/run"
    NUM_OF_USERS = 500
    TIME_TO_SLEEP = 0.0030

  def print_test_name(test_case)
    print "\n"
    print "Test case: #{test_case}\n"
  end

  def print_performance_summary(test_case,succ, failures)
    print "Summary for: #{test_case}\n"
    print "Total NO. Requests: #{succ + failures}\n"
    print "Total NO. Successful Requests: #{succ}\n"
    print "Total NO. failed Requests: #{failures}\n"
  end
  # ***** PerformanceTests Section *****

end
