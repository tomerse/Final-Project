
# Chatbot configuration file
CHATBOT_FOLDER = 'lib/assets/courses/chatbot'
CHATBOT_CONFIGURATION_FILE = 'chatbot.xml'

class ChatbotCheckExercisesMessages

  def initialize()
    @caption = ''
    @generic_message = ''
    @specific_message = ''
    @more_info = ''
  end

  def read_values(config_file, node)
    @caption = Xml.get_element(config_file, node + '//caption')
    @generic_message = Xml.get_element(config_file, node + '//generic_message')
    @specific_message = Xml.get_element(config_file, node + '//specific_message')
    @more_info = Xml.get_element(config_file, node + '//more_info')
  end

  def set_values(caption, generic_message, specific_message, more_info)
    @caption = caption
    @generic_message = generic_message
    @specific_message = specific_message
    @more_info = more_info
  end

  def get_caption
    return @caption
  end

  def get_generic_message
    return @generic_message
  end

  def get_specific_message
    return @specific_message
  end

  def get_more_info
    return @more_info
  end

end


class ChatbotReader

  def initialize()
    @file_path = "#{Rails.root}" + '/' + CHATBOT_FOLDER + '/' + CHATBOT_CONFIGURATION_FILE
    @file = Xml.readxml(@file_path)
    @success_messages = ChatbotCheckExercisesMessages.new
    @comp_error_messages = ChatbotCheckExercisesMessages.new
    @test_failed_messages = ChatbotCheckExercisesMessages.new
    parse_config_file
  end

  def parse_config_file
    @success_messages.read_values(@file, 'check_exercise//success')
    @comp_error_messages.read_values(@file, 'check_exercise//comp_error')
    @test_failed_messages.read_values(@file, 'check_exercise//test_failed')
  end

  def get_success_messages
    return @success_messages
  end

  def get_comp_error_messages
    return @comp_error_messages
  end

  def get_test_failed_messages
    return @test_failed_messages
  end

end