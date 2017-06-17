class Course

  attr_accessor :title, :general, :syllabus, :currLang, :courseApp, :logo

  def initialize(params=[])
    @title = params["title"]
    @general = params["general"]
    @syllabus = params["syllabus"]
    @currLang = params["currLang"]
    @courseApp = params["courseApp"]
    @logo = params["logo"]

  end



end