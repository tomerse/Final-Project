class StatsHandler
  include StatsConstants

  @@access_counter = 0
  @@lock = Mutex.new

  def self.trigger_statistics?
    if @@lock.try_lock
      if @@access_counter.nonzero? and @@access_counter % STATS_SUMMARY_COUNT == 0
        sw = StatisticsWorker.new
        sw.summarize_statistics CoursesStatsFactory.get_stats_collectors
      end
      @@access_counter+=1
      @@lock.unlock
    end
  end

  def self.inc_total_submits(course, lang, ex_id)
    statsCollector = CoursesStatsFactory.get_stats_collector course, lang
    statsCollector.inc_total_submits ex_id
  end

  def self.inc_succ_submits(course, lang, ex_id)
    statsCollector = CoursesStatsFactory.get_stats_collector course, lang
    statsCollector.inc_succ_submits ex_id
  end

  def self.dec_num_of_users(course, lang, ex_id)
    statsCollector = CoursesStatsFactory.get_stats_collector course, lang
    statsCollector.dec_num_of_users ex_id
  end

  def self.inc_num_of_users(course, lang, ex_id)
    trigger_statistics?
    statsCollector = CoursesStatsFactory.get_stats_collector course, lang
    statsCollector.inc_num_of_users ex_id
  end

end