class Course < ActiveRecord::Base
  attr_accessible :id, :name

  def self.find(courseid)
    case courseid
      when 0
        'chatbot'
      else
        print('Error: unrecognized course id ' + courseid.to_s)
    end
  end



end
