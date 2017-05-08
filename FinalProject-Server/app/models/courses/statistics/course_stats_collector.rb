require_relative 'stats_constants'
class CourseStatsCollector
  include StatsConstants
  def initialize(course, lang)
    @exercises_stats = Hash.new
    @course = course
    @lang = lang
  end

  def incNumOfUsers(ex_id)
    if not @exercises_stats.has_key? ex_id
      stats = Hash.new
      stats[TOTAL_SUBMITS] = 0
      stats[SUCC_SUBMITS] = 0
      stats[CURR_NUM_USERS] = 0
      @exercises_stats[ex_id] = stats
    end
    @exercises_stats[ex_id][CURR_NUM_USERS]+=1
  end

  def decNumOfUsers(ex_id)
    @exercises_stats[ex_id][CURR_NUM_USERS]-=1
  end

  def incTotalSubmits(ex_id)
    @exercises_stats[ex_id][TOTAL_SUBMITS]+=1
  end

  def incSuccSubmits(ex_id)
    @exercises_stats[ex_id][SUCC_SUBMITS]+=1
  end

  attr_accessor :exercises_stats, :course, :lang

end