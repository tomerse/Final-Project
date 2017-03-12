class ChatBotTest


  def initialize(params=[])
    @input = params["input"]
    @expected_output = params["output"]
    @failure = params["failure"]
  end

  def get_input()
    return @input
  end

  def get_expected_output()
    return @expected_output
  end

  def get_failure()
    return @failure
  end

  def to_s()
    input = ""
    if !@input.nil?
      input=@input
    end
    print "input = " + input + "\n"

    output = ""
    if !@expected_output.nil?
      output=@expected_output
    end
    print "output = " + output + "\n"

    failure = ""
    if !@failure.nil?
      failure=@failure
    end
    print "failure = " + failure + "\n"
  end

end