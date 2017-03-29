class ArgTypesParser

  def self.parse_arg_types(file)
    args_types = Xml.get_elements(file, 'argstypes//arg','argtypes')
    #a = args[0].children[0]
    #types = a.children.map


      #types = Xml.get_elements2(arg, "type")
      #print "\ntypes size = " + types.length.to_s + "\n"
      #print "\narg = " + arg.to_s + "\n"
      #types.each do |type|
      #  arg_types.push(type)
      #end
      #arg_types = Xml.get_elements(arg, "type")

    return args_types
  end

end