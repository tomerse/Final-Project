require_relative 'stats_constants'

class CourseStatsCollector
  include StatsConstants

  def initialize(course, lang)
    @course = course
    @lang = lang
    @lock = Mutex.new
    @exercises_stats = Hash.new
  end

  def inc_num_of_users(ex_id)
    @lock.synchronize {
      if not @exercises_stats.has_key? ex_id
        @exercises_stats[ex_id] = Hash.new
        @exercises_stats[ex_id][TOTAL_SUBMITS] = 0
        @exercises_stats[ex_id][SUCC_SUBMITS] = 0
        @exercises_stats[ex_id][CURR_NUM_USERS] = 0
      end
      @exercises_stats[ex_id][CURR_NUM_USERS]+=1
    }
  end

  def dec_num_of_users(ex_id)
    @lock.synchronize {
      if (@exercises_stats[ex_id][CURR_NUM_USERS]).nonzero?
        @exercises_stats[ex_id][CURR_NUM_USERS]-=1
      end
    }
  end

  def inc_total_submits(ex_id)
    @lock.synchronize {
      @exercises_stats[ex_id][TOTAL_SUBMITS]+=1
    }
  end

  def inc_succ_submits(ex_id)
    @lock.synchronize {
      @exercises_stats[ex_id][SUCC_SUBMITS]+=1
    }
  end

  attr_accessor :exercises_stats, :course, :lang

end