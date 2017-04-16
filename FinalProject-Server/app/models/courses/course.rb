class Course

  attr_accessor :title, :general, :syllabus, :currLang, :courseApp, :exercises

  def initialize(params=[])
    @title = params["title"]
    @general = params["general"]
    @syllabus = params["syllabus"]
    @currLang = params["currLang"]
    @courseApp = params["courseApp"]

  end



end