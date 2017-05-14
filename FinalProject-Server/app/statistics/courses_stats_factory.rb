
class CoursesStatsFactory
  include StatsConstants

  @@statsCollectors = Hash.new



  def self.get_stats_collector(course, lang)
    if not @@statsCollectors.has_key? course
      @@statsCollectors[course] = Hash.new
    end
    if not @@statsCollectors[course].has_key? lang
      @@statsCollectors[course][lang] = (CourseStatsCollector.new course, lang)
    end
    @@statsCollectors[course][lang]
  end

  def self.get_stats_collectors
    return @@statsCollectors
  end

  private_class_method :new

end