require 'test_helper'

class ChatbotExerciseReaderTest < ActiveSupport::TestCase

  TESTSUITE='ChatbotExerciseReader Unit Tests'
  NUMOFTESTS = 4
  Tsummary = TestsSummary.new NUMOFTESTS

  test "" do
    Tlog.execTestSuite(TESTSUITE)
  end


  test "ChatbotExerciseReader.parse_exercise valid xml" do
    Tlog.execUt('ChatbotExerciseReader.parse_exercise valid xml')
    begin
      xml = Xml.readxml EXML
      chatbot_exercise_reader = ChatbotExerciseReader.new
      chatbot_exercise = chatbot_exercise_reader.parse_exercise(xml)
      ans = assert_not_nil chatbot_exercise
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

  test "ChatbotExerciseReader.parse_exercise inValid xml" do
    Tlog.execUt('ChatbotExerciseReader.parse_exercise inValid xml')
    begin
      chatbot_exercise_reader = ChatbotExerciseReader.new
      chatbot_exercise = chatbot_exercise_reader.parse_exercise nil
      if chatbot_exercise
        Tlog.fail
        Tsummary.addFailure
      end
    rescue => ex
      Tlog.pass
      Tsummary.passInc
    end
  end

  test "ChatbotExercise valid params arg" do
    Tlog.execUt('ChatbotExercise valid params arg')
    begin
      xml = Xml.readxml EXML
      chatbot_exercise_reader = ChatbotExerciseReader.new
      chatbot_exercise = chatbot_exercise_reader.parse_exercise(xml)
      ans = assert_not_nil chatbot_exercise
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

  test "ChatbotExercise inValid params arg" do
    Tlog.execUt('ChatbotExercise valid params arg')
    begin
      chatbot_exercise = ChatbotExercise.new nil
      if chatbot_exercise
        Tlog.fail
        Tsummary.addFailure
      end
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
