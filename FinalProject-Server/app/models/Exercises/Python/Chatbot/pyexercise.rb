class Pyexercise #< ActiveRecord::Base

    def initialize(params=[])
      @id = params["id"]
      @topic = params["topic"]
      @instructions = params["instructions"]
      @tasks = params["tasks"]
      @hints = params["hints"]
      @code = params["code"]
      @chatbotinitmessage = params["chatbotinitmessage"]
      @numofargs = params["numofargs"]
      @argstype = params["argstype"]
    end
end
