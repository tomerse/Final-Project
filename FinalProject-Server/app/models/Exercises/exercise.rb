class Exercise < ActiveRecord::Base


  require 'Exercises/Python/Chatbot/py_chat_exec_parser'
  require 'Exercises/Python/Chatbot/pyexercise'

  def self.get_relevant_exercise(languagename, coursename, xml)
    if(languagename == 'python')
      if(coursename == 'chatbot')
        xml.to_s
        params = PyChatExecParser.ParseParams(xml)
        exec = Pyexercise.new(params)
      end
    end
  end

  def compile(id, code)

  end

end
