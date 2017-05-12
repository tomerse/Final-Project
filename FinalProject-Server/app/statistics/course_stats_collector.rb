require_relative 'stats_constants'
class CourseStatsCollector
  include StatsConstants



  def initialize(course, lang)
    @course = course
    @lang = lang
    @exercises_stats = Hash.new
    @lock = Mutex.new
  end

  def incNumOfUsers(ex_id)
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

  def decNumOfUsers(ex_id)
    @lock.synchronize {
      @exercises_stats[ex_id][CURR_NUM_USERS]-=1
    }
  end

  def incTotalSubmits(ex_id)
    @lock.synchronize {
      @exercises_stats[ex_id][TOTAL_SUBMITS]+=1
    }
  end

  def incSuccSubmits(ex_id)
    @lock.synchronize {
      @exercises_stats[ex_id][SUCC_SUBMITS]+=1
    }
  end

  attr_accessor :exercises_stats, :course, :lang

end