require 'concurrent'

class StatisticsWorker
  #Should be replaced with "sideqik" in rails >=4.0
  include Concurrent::Async


  def initialize
    @slog = StatsLogger.new
  end

  def summarize_statistics
    stats = CoursesStatsFactory.getStatsCollectors
    stats.each_key do |course|
      course_stats = stats[course]
      course_stats.each_key do |lang|
        col = course_stats[lang]
        @slog.log_course_summary col
      end
    end

  end
end