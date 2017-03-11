class PyChatExecParser #< Exercise

  def self.ParseParams(xmlfile)
    id = Xml.get_element(xmlfile,"id")
    topic = Xml.get_element(xmlfile,"topic")
    instructions = Xml.get_element(xmlfile,"instructions")
    code = Xml.get_element(xmlfile,"code")
    tasks = Xml.get_elements(xmlfile, "task") #['task1','task2']
    hints = Xml.get_elements(xmlfile, "hint") #['hint1','hint2']
    chatbotinitmessage = Xml.get_element(xmlfile,"chatbotinitmessage")
    argstype = Xml.get_elements(xmlfile, "argtype") #['argtype1','argtype2']
    numofargs = argstype.length
    return Hash["id"=>id, "topic"=>topic, "instructions"=>instructions, "code"=>code,
              "tasks"=>tasks, "hints"=>hints, "chatbotinitmessage"=>chatbotinitmessage,
                "numofargs"=>numofargs, "argstype"=>argstype]
  end


end