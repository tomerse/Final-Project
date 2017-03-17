require 'test_helper'

class XmlTest < ActiveSupport::TestCase

  TESTSUITE = 'Xml Unit Tests'
  NUMOFTESTS = 6

  Tsummary = TestsSummary.new NUMOFTESTS

  test "" do
    Tlog.execTestSuite(TESTSUITE)
  end

  test "Xml.readXml valid path" do
    Tlog.execUt('Xml.readXml valid path')
    begin
      xml = Xml.readxml(EXML)
      ans = assert_not_nil(xml)
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

  test "Xml.readXml inValid path" do
    Tlog.execUt('Xml.readXml inValid path')
    begin
      inValidPath=EXML+'$$'
      xml = Xml.readxml(inValidPath)
      ans = assert_nil(xml)
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

  test "valid Xml.getElement" do
    Tlog.execUt('valid Xml.getElement')
    begin
      xml = Xml.readxml(EXML)
      act = Xml.get_element(xml,'topic')
      exp = 'Printing'
      ans = assert_equal(act,exp)
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


  test "inValid Xml.getElement" do
    Tlog.execUt('inValid Xml.getElement')
    begin
      xml = Xml.readxml(EXML)
      act = Xml.get_element(xml,nil)
      exp = nil
      ans = assert_equal(act,exp)
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

  test "valid Xml.getElements" do
    Tlog.execUt('valid Xml.getElements')
    begin
      xml = Xml.readxml(EXML)
      tasks = Xml.get_elements(xml,'task')
      hints = Xml.get_elements(xml,'hint')
      ans = assert_not_nil(tasks) and assert_not_nil(hints)
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

  test "inValid Xml.getElements" do
    Tlog.execUt('inValid Xml.getElements')
    begin
      xml = Xml.readxml(EXML)
      tasks = Xml.get_elements(xml,'bla')
      hints = Xml.get_elements(xml,'bla')
      ans = assert_equal(tasks,[]) and assert_equal(hints,[])
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
