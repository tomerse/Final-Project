class ChatBotTest

  def initialize(params=[])
    @input = params["input"]
    @output = params["output"]
    @failure = params["failure"]
  end

  def to_s()
    input = ""
    if !@input.nil?
      input=@input
    end
    print "input = " + input + "\n"

    output = ""
    if !@output.nil?
      output=@output
    end
    print "output = " + output + "\n"

    failure = ""
    if !@failure.nil?
      failure=@failure
    end
    print "failure = " + failure + "\n"
  end

end