
class CoursesStatsFactory

  @@statsCollectors = Hash.new

  def self.getStatsCollector course, lang
    if not @@statsCollectors.has_key? course
      @@statsCollectors[course] = Hash.new
      @@statsCollectors[course][lang] = (CourseStatsCollector.new course, lang)
    end
    @@statsCollectors[course][lang]
  end

  def self.getStatsCollectors
    return @@statsCollectors
  end

  private_class_method :new

end