class StatisticsWorker
  #Should be replaced with "sideqik" in rails >=4.0

  def initialize
    @slog = StatsLogger.new
  end

  def summarize_statistics(stats)
    if stats.nil?
      return
    end
    stats.each_key do |course|
      stats[course].each_key do |lang|
        col = stats[course][lang]
        @slog.log_course_summary col
      end
    end
  end

end