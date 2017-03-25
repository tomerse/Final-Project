class Xml < ActiveRecord::Base
  require 'nokogiri'
  

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
  
  def self.readxml(filepath)
    doc = Nokogiri.parse open(filepath)
  end

  def self.get_element(xml,element)
    xml.at(element).text
  end


  def self.get_elements(xml,node)
    arr = Array.new
    xml.xpath('//'+node).map do
      |element|
      arr.push(element.text)
    end
    return arr
  end

end
