class PyChatExecParser < Exercise

  def self.ParseParams(xmlfile)
    #print xmlfile.to_s
    id = Xml.get_element(xmlfile,'id')
    topic = Xml.get_element(xmlfile,'topic')
    instructions = Xml.get_element(xmlfile,'instructions')
    code = Xml.get_element(xmlfile,'code')
    tasks = ['shar','lil']
    hints = ['mer','lo']
    chatbotinitmessage = Xml.get_element(xmlfile,'chatbotinitmessage')
    return Hash["id"=>id, "topic"=>topic, "instructions"=>instructions, "code"=>code,
              "tasks"=>tasks, "hints"=>hints, "chatbotinitmessage"=>chatbotinitmessage]
  end


end