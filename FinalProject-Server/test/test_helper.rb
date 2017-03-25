ENV["RAILS_ENV"] = "test"
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'test_log'
require 'tests_summary'

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
  COMP_ERR_INPUT = File.absolute_path('test/unit/compilers_tests_inputs/ex_1/comp_error.py')
  COMP_RUNTIME_ERR_INPUT = File.absolute_path('test/unit/compilers_tests_inputs/ex_1/comp_run_time_err.py')
  PYCOMP_SUCC_INPUT = File.absolute_path('test/unit/compilers_tests_inputs/ex_1/pycomp_success.py')
  PYCOMP_RUNTIME_ERR_INPUT = File.absolute_path('test/unit/compilers_tests_inputs/ex_1/pycomp_runtime_err.py')
  Tlog = TestLog.new 'test/unit/unit_tests_resutls.log'

  def self.read_test_input(path)
    if File.readable? path
      text = File.read path
      return text
      else return nil
    end
  end

  # ***** UT Section *****

end
