require 'log4r'

class TestLog

  PATTERN = "[%l] %d %.10000m"

  def initialize logPath
    format = Log4r::PatternFormatter.new(:pattern => PATTERN)
    @logPath = logPath
    @tlog = Log4r::Logger.new("testLog")
    @tlog.outputters << Log4r::FileOutputter.new("tests_resutls", :filename => "#{@logPath}", :formatter => format)
    File.truncate("#{@logPath}",0)
    @testsCounter = 0
  end

  def execTestSuite(testSuite)
    header="Executing: #{testSuite}"
    headline=''
    for i in 0..header.to_s.length-1
      headline +='*'
    end
    info(headline)
    info(header)
    info(headline)
    @testsCounter=0
  end

  def execTestSuiteSummary (testSuite, summary)
    header = "#{testSuite} Summary:"
    headline=''
    for i in 0..header.to_s.length-1
      headline +='*'
    end
    total = "Total No. Tests: #{summary['total']}"
    pass = "No. Tests Passed: #{summary['pass']}/#{summary['total']}"
    fail = "No. Tests Failed: #{summary['fail']}/#{summary['total']}"
    failures = summary['failures']
    if not failures.nil?
      fails = 'Failures in tests: ' + failures + '
      '
    end
    info headline
    info header
    info headline
    info total
    info pass
    warn fail
    if not failures.nil?
      warn fails
    end

  end

  def execUt(testName)
    @testsCounter+=1
    info("##{@testsCounter} Executing Unit Test: #{testName}")
  end

  def pass
    info 'Test Passed'
  end

  def fail
    warn 'Test Failed'
  end

  def errorFail(msg)
    error msg
    error 'Test Failed'
  end

  def info(msg)
    @tlog.info(msg)
  end

  def warn(msg)
    @tlog.warn(msg)
  end

  def error(msg)
    @tlog.error(msg)
  end

end