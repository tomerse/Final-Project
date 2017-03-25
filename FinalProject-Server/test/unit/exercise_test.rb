require 'test_helper'

class ExerciseTest < ActiveSupport::TestCase


  TESTSUITE = 'Exercise Unit Tests'
  NUMOFTESTS = 4
  Tsummary = TestsSummary.new NUMOFTESTS

  test "" do
    Tlog.execTestSuite(TESTSUITE)
  end


  test "ChatbotExerciseReader.build_exercise valid inputs" do
     Tlog.execUt('ChatbotExerciseReader.build_exercise  valid inputs')
     begin
       exercise_reader = CourseFactory.get_exercise_reader(COURSEFOLDER)
       exercise_file = CourseFactory.get_exercise_file(COURSEFOLDER, PROGLANGUAGE, 1)
       exercise = exercise_reader.build_exercise(exercise_file)
       ans = assert_not_nil(exercise)
       if ans
         Tlog.pass
         Tsummary.passInc
       else
         Tlog.fail
         Tsummary.addFailure
       end
     rescue => ex
       Tlog.errorFail("Exception: #{ex.message}")
       Tsummary.addFailure
     end
   end


   test "ChatbotExerciseReader.build_exercise  inValid xmlFile" do
     Tlog.execUt('ChatbotExerciseReader.build_exercise  inValid xmlFile')
     begin
       exercise_reader = CourseFactory.get_exercise_reader(COURSEFOLDER)
       exercise_file = CourseFactory.get_exercise_file(COURSEFOLDER, PROGLANGUAGE, nil)
       exercise = exercise_reader.build_exercise(exercise_file)
       Tlog.fail
       Tsummary.addFailure
     rescue => ex
       Tlog.pass
       Tsummary.passInc
     end
   end

   test "ChatbotExerciseReader.build_exercise inValid progLang" do
     Tlog.execUt('ChatbotExerciseReader.build_exercise  inValid progLang')
     begin
       exercise_reader = CourseFactory.get_exercise_reader(COURSEFOLDER)
       exercise_file = CourseFactory.get_exercise_file(COURSEFOLDER, nil, 1)
       exercise = exercise_reader.build_exercise(exercise_file)
       Tlog.fail
       Tsummary.addFailure
     rescue => ex
       Tlog.pass
       Tsummary.passInc
     end
   end

   test "ChatbotExerciseReader.build_exercise inValid courseName" do
     Tlog.execUt('ChatbotExerciseReader.build_exercise inValid courseName')
     begin
       exercise_reader = CourseFactory.get_exercise_reader(COURSEFOLDER)
       exercise_file = CourseFactory.get_exercise_file(nil, PROGLANGUAGE, 1)
       exercise = exercise_reader.build_exercise(exercise_file)
       Tlog.fail
       Tsummary.addFailure
     rescue => ex
       Tlog.pass
       Tsummary.passInc
     end
   end

  test "zzz" do
    summary = Tsummary.summary
    Tlog.execTestSuiteSummary TESTSUITE, summary
  end

end
