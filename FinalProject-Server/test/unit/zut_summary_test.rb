require 'test_helper'

class ZutSummaryTest < ActiveSupport::TestCase

  TESTSUITE = 'Unit Tests Overall'
  NUMOFTESTS = 0
  
  Tsummary = TestsSummary.new NUMOFTESTS

  test "" do
    Tsummary.generateUnitTestsSummary
    summary = Tsummary.summary
    UTlog.execTestSuiteSummary TESTSUITE, summary
  end

end