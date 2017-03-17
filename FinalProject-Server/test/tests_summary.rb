
class TestsSummary

  @@overAllPass=0
  @@overAllFails=0
  @@overAllTests=0

  def initialize(testsNo)
    @numOfTests = testsNo
    @passCount=0
    @failCount=0
    @testsCount=0
    @failures=Array.new
    @summary = Hash.new
  end

  def passInc
    @passCount+=1
    @testsCount+=1
    if @testsCount == @numOfTests
      @summary = generateTestSuiteSummary
    end
  end

  def addFailure
    @failCount+=1
    @failures.push "##{@testsCount+1}"
    @testsCount+=1
    if @testsCount == @numOfTests
      @summary = generateTestSuiteSummary
    end
  end

  def generateTestSuiteSummary
    @@overAllPass+=@passCount
    @@overAllFails+=@failCount
    @@overAllTests+=@numOfTests
    @summary = Hash['total' => @numOfTests,'pass' => @passCount,'fail' => @failCount,'failures' => @failures.to_s]
  end

  def generateUnitTestsSummary
    @@overAllPass+=@passCount
    @@overAllFails+=@failCount
    @@overAllTests+=@numOfTests
    @summary = Hash['total' => @@overAllTests,'pass' => @@overAllPass,'fail' => @@overAllFails]
  end

  def summary
    return @summary
  end

end