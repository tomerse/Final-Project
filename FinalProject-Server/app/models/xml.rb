class Xml < ActiveRecord::Base
  require 'nokogiri'
  
  LEVEL_FILE_NAME_CONST = "/Levels/Level_"
  XML_EXT_CONST = ".xml"
  
  def self.createxml
    
    builder = Nokogiri::XML::Builder.new do |xml|
      xml.root {
        xml.products {
          xml.widget {
            xml.id_ "10"
            xml.name "Awesome Fizz"
          }
        }
      } 
      end
      
    xml_string = builder.to_xml
    
    path = Dir.pwd + LEVEL_FILE_NAME_CONST + 'exam' + XML_EXT_CONST

    File.open(path, 'w') do |file|
    # write the xml string generated above to the file
      file.write xml_string
    end
    
  end
  
  def self.readxml(levelId)
    
    levelfilepath = Dir.pwd+ LEVEL_FILE_NAME_CONST + levelId.to_s + XML_EXT_CONST
    print levelfilepath
    File.open(levelfilepath, 'r') do |file|
      str = file.read
      print str
    end
    
    
  end
end
