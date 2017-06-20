require 'test_helper'

class ChatbotExerciseReaderTest < ActiveSupport::TestCase

  TESTSUITE='ChatbotExerciseReader Unit Tests'
  NUMOFTESTS = 4
  Tsummary = TestsSummary.new NUMOFTESTS

  test "" do
    UTlog.execTestSuite(TESTSUITE)
  end


  test "ChatbotExerciseReader.parse_exercise valid xml" do
    UTlog.execUt('ChatbotExerciseReader.parse_exercise valid xml')
    begin
      xml = Xml.readxml EXML
      chatbot_exercise_reader = ChatbotExerciseReader.new
      chatbot_exercise = chatbot_exercise_reader.parse_exercise(xml)
      ans = assert_not_nil chatbot_exercise
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

  test "ChatbotExerciseReader.parse_exercise inValid xml" do
    UTlog.execUt('ChatbotExerciseReader.parse_exercise inValid xml')
    begin
      chatbot_exercise_reader = ChatbotExerciseReader.new
      chatbot_exercise = chatbot_exercise_reader.parse_exercise nil
      if chatbot_exercise
        UTlog.fail
        Tsummary.addFailure
      end
    rescue => ex
      UTlog.pass
      Tsummary.passInc
    end
  end

  test "ChatbotExercise valid params arg" do
    UTlog.execUt('ChatbotExercise valid params arg')
    begin
      xml = Xml.readxml EXML
      chatbot_exercise_reader = ChatbotExerciseReader.new
      chatbot_exercise = chatbot_exercise_reader.parse_exercise(xml)
      ans = assert_not_nil chatbot_exercise
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

  test "ChatbotExercise inValid params arg" do
    UTlog.execUt('ChatbotExercise valid params arg')
    begin
      chatbot_exercise = ChatbotExercise.new nil
      if chatbot_exercise
        UTlog.fail
        Tsummary.addFailure
      end
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
