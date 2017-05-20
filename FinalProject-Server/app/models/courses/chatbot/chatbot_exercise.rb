class ChatbotExercise

  attr_accessor :id,:topic,:instructions,:tasks,:hints,:code,
                :chatbotinitmessage, :chatbotoutputmessage, :argsmesssages, :numofargs
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
    end

end
