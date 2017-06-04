require 'test_helper'

class XmlTest < ActiveSupport::TestCase

  TESTSUITE = 'Xml Unit Tests'
  NUMOFTESTS = 6

  Tsummary = TestsSummary.new NUMOFTESTS

  test "" do
    UTlog.execTestSuite(TESTSUITE)
  end

  test "Xml.readXml valid path" do
    UTlog.execUt('Xml.readXml valid path')
    begin
      xml = Xml.readxml(EXML)
      ans = assert_not_nil(xml)
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

  test "Xml.readXml inValid path" do
    UTlog.execUt('Xml.readXml inValid path')
    begin
      inValidPath=EXML+'$$'
      xml = Xml.readxml(inValidPath)
      ans = assert_nil(xml)
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

  test "valid Xml.getElement" do
    UTlog.execUt('valid Xml.getElement')
    begin
      xml = Xml.readxml(EXML)
      act = Xml.get_element(xml,'topic')
      exp = 'Printing'
      ans = assert_equal(act,exp)
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


  test "inValid Xml.getElement" do
    UTlog.execUt('inValid Xml.getElement')
    begin
      xml = Xml.readxml(EXML)
      act = Xml.get_element(xml,nil)
      exp = nil
      ans = assert_equal(act,exp)
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

  test "valid Xml.getElements" do
    UTlog.execUt('valid Xml.getElements')
    begin
      xml = Xml.readxml(EXML)
      tasks = Xml.get_elements(xml,'task')
      hints = Xml.get_elements(xml,'hint')
      ans = assert_not_nil(tasks) and assert_not_nil(hints)
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

  test "inValid Xml.getElements" do
    UTlog.execUt('inValid Xml.getElements')
    begin
      xml = Xml.readxml(EXML)
      tasks = Xml.get_elements(xml,'bla')
      hints = Xml.get_elements(xml,'bla')
      ans = assert_equal(tasks,[]) and assert_equal(hints,[])
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

  test "zzz" do
    summary = Tsummary.summary
    UTlog.execTestSuiteSummary TESTSUITE, summary
  end

end
