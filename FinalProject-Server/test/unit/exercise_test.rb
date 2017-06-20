require 'test_helper'

class ExerciseTest < ActiveSupport::TestCase


  TESTSUITE = 'Exercise Unit Tests'
  NUMOFTESTS = 4
  Tsummary = TestsSummary.new NUMOFTESTS

  test "" do
    UTlog.execTestSuite(TESTSUITE)
  end


  test "ChatbotExerciseReader.build_exercise valid inputs" do
     UTlog.execUt('ChatbotExerciseReader.build_exercise  valid inputs')
     begin
       exercise_reader = CourseFactory.get_exercise_reader(COURSEFOLDER)
       exercise_file = CourseFactory.get_exercise_file(COURSEFOLDER, PROGLANGUAGE, 1)
       exercise = exercise_reader.build_exercise(exercise_file)
       ans = assert_not_nil(exercise)
       if ans
         UTlog.pass
         Tsummary.passInc
       else
         UTlog.fail
         Tsummary.addFailure
       end
     rescue => ex
       UTlog.errorFail("Exception: #{ex.message}")
       Tsummary.addFailure
     end
   end


   test "ChatbotExerciseReader.build_exercise  inValid xmlFile" do
     UTlog.execUt('ChatbotExerciseReader.build_exercise  inValid xmlFile')
     begin
       exercise_reader = CourseFactory.get_exercise_reader(COURSEFOLDER)
       exercise_file = CourseFactory.get_exercise_file(COURSEFOLDER, PROGLANGUAGE, nil)
       exercise = exercise_reader.build_exercise(exercise_file)
       UTlog.fail
       Tsummary.addFailure
     rescue => ex
       UTlog.pass
       Tsummary.passInc
     end
   end

   test "ChatbotExerciseReader.build_exercise inValid progLang" do
     UTlog.execUt('ChatbotExerciseReader.build_exercise  inValid progLang')
     begin
       exercise_reader = CourseFactory.get_exercise_reader(COURSEFOLDER)
       exercise_file = CourseFactory.get_exercise_file(COURSEFOLDER, nil, 1)
       exercise = exercise_reader.build_exercise(exercise_file)
       UTlog.fail
       Tsummary.addFailure
     rescue => ex
       UTlog.pass
       Tsummary.passInc
     end
   end

   test "ChatbotExerciseReader.build_exercise inValid courseName" do
     UTlog.execUt('ChatbotExerciseReader.build_exercise inValid courseName')
     begin
       exercise_reader = CourseFactory.get_exercise_reader(COURSEFOLDER)
       exercise_file = CourseFactory.get_exercise_file(nil, PROGLANGUAGE, 1)
       exercise = exercise_reader.build_exercise(exercise_file)
       UTlog.fail
       Tsummary.addFailure
     rescue => ex
       UTlog.pass
       Tsummary.passInc
     end
   end

  test "zzz" do
    summary = Tsummary.summary
    UTlog.execTestSuiteSummary TESTSUITE, summary
  end

end
