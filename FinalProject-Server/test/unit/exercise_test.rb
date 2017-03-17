require 'test_helper'

class ExerciseTest < ActiveSupport::TestCase


  TESTSUITE = 'Exercise Unit Tests'
  NUMOFTESTS = 4
  Tsummary = TestsSummary.new NUMOFTESTS

  test "" do
    Tlog.execTestSuite(TESTSUITE)
  end


  test "Exercise.get_relevant_exercise valid inputs" do
     Tlog.execUt('Exercise.get_relevant_exercise valid inputs')
     begin
       exXml = Xml.readxml(EXML)
       exerc = Exercise.get_relevant_exercise(PROGLANGUAGE,COURSEFOLDER,exXml)
       ans = assert_not_nil(exerc)
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


   test "Exercise.get_relevant_exercise inValid xmlFile" do
     Tlog.execUt('Exercise.get_relevant_exercise inValid xmlFile')
     begin
       exerc = Exercise.get_relevant_exercise(PROGLANGUAGE,COURSEFOLDER,nil)
       ans = assert_nil(exerc)
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

   test "Exercise.get_relevant_exercise inValid progLang" do
     Tlog.execUt('Exercise.get_relevant_exercise inValid progLang')
     begin
       exXml = Xml.readxml(EXML)
       exerc = Exercise.get_relevant_exercise(nil,COURSEFOLDER,exXml)
       ans = assert_nil(exerc)
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

   test "Exercise.get_relevant_exercise inValid courseName" do
     Tlog.execUt('Exercise.get_relevant_exercise inValid courseName')
     begin
       exXml = Xml.readxml(EXML)
       exerc = Exercise.get_relevant_exercise(PROGLANGUAGE,nil,exXml)
       ans = assert_nil(exerc)
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

  test "zzz" do
    summary = Tsummary.summary
    Tlog.execTestSuiteSummary TESTSUITE, summary
  end

end
