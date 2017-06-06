class ChatbotExercise

  attr_accessor :id,:topic,:instructions,:tasks,:hints,:code,
                :chatbotinitmessage, :chatbotoutputmessage, :argsmesssages, :numofargs,
                :comp_error_info, :test_failed_info, :success_info
    def initialize(params=[])
      @id = params["id"]
      @topic = params["topic"]
      @instructions = params["instructions"]
      @tasks = params["tasks"]
      @hints = params["hints"]
      @code = params["code"]
      @chatbotinitmessage = params["chatbotinitmessage"]
      @chatbotoutputmessage = params["chatbotoutputmessage"]
      @argsmesssages = params["argsmesssages"]
      @numofargs = params["numofargs"]
      @comp_error_info = params["comp_error_info"]
      @test_failed_info = params["test_failed_info"]
      @success_info = params["success_info"]
    end


    def get_comp_error_info
      return @comp_error_info
    end

    def get_test_failed_info
      return @test_failed_info
    end

    def get_success_info
      return @success_info
    end

end
