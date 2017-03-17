require 'test_helper'

class PyexerciseTest < ActiveSupport::TestCase

  TESTSUITE='Pyexercise Unit Tests'
  NUMOFTESTS = 4
  Tsummary = TestsSummary.new NUMOFTESTS

  test "" do
    Tlog.execTestSuite(TESTSUITE)
  end


  test "PyChatExecParser.ParseParams valid xml" do
    Tlog.execUt('PyChatExecParser.ParseParams valid xml')
    begin
      xml = Xml.readxml EXML
      xmlHash = PyChatExecParser.ParseParams xml
      ans = assert_not_nil xmlHash
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

  test "PyChatExecParser.ParseParams inValid xml" do
    Tlog.execUt('PyChatExecParser.ParseParams inValid xml')
    begin
      xmlHash = PyChatExecParser.ParseParams nil
      ans = assert_nil xmlHash
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

  test "Pyexercise valid params arg" do
    Tlog.execUt('Pyexercise valid params arg')
    begin
      xml = Xml.readxml EXML
      xmlHash = PyChatExecParser.ParseParams xml
      pyexer = Pyexercise.new xmlHash
      ans = assert_not_nil pyexer
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

  test "Pyexercise inValid params arg" do
    Tlog.execUt('Pyexercise valid params arg')
    begin
      pyexer = Pyexercise.new nil
      ans = assert_nil pyexer
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
