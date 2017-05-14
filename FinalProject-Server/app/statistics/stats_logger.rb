require 'log4r'
require_relative 'stats_constants'


class StatsLogger
  include StatsConstants

  PATTERN = '[%l] %d %.10000m'
  SUMMARY_HEADER = 'Executing statistics Summary...'


  def initialize
    @log = Log4r::Logger.new('statisticsLogger')
    @format = Log4r::PatternFormatter.new(:pattern => PATTERN)
    @total_users = 0
    @total_submits = 0
    @total_succ_submits = 0
#    @slock = Mutex.new
  end

  def log_course_summary(collector)
      #dynamicaly creates <course>_<lang>_statistics.log file
      add_outputter collector.course, collector.lang
      @log.info SUMMARY_HEADER
      course_summary_header = "Course: #{collector.course}, ProgLang: #{collector.lang}"
      headline = prepare_headline course_summary_header
      info_header headline, course_summary_header
      ex_stats = collector.exercises_stats
      ex_stats_keys = ex_stats.keys.sort
      ex_stats_keys.each do |ex_id|
        update_total_counters ex_stats[ex_id]
        exercise_header = "Exercise: #{ex_id}"
        headline = prepare_headline exercise_header
        info_header headline, exercise_header
        unsucc_submits = ex_stats[ex_id][TOTAL_SUBMITS] - ex_stats[ex_id][SUCC_SUBMITS]
        @log.info "No. active users: #{ex_stats[ex_id][CURR_NUM_USERS]}"
        @log.info "No. successful submits: #{ex_stats[ex_id][SUCC_SUBMITS]}"
        @log.info "No. unsuccessful submits: #{unsucc_submits}"
        @log.info "No. Total submits: #{ex_stats[ex_id][TOTAL_SUBMITS]}"
        if (ex_stats[ex_id][TOTAL_SUBMITS]).nonzero?
          @log.info "Exercise success rate: #{(ex_stats[ex_id][SUCC_SUBMITS].to_f/ex_stats[ex_id][TOTAL_SUBMITS].to_f)*100}%"
        else
          @log.info 'Exercise success rate: 0%'
        end
      end
      log_overall_summary
  end

  def log_overall_summary
    header = 'Overall Course Summary:'
    info_header (prepare_headline header), header
    @log.info "Overall NO. users: #{@total_users}"
    @log.info "Overall NO. submits: #{@total_submits}"
    @log.info "Overall NO. successful submits: #{@total_succ_submits}"
    @log.info "Overall NO. Unsuccessful submits: #{@total_submits-@total_succ_submits}"
    if @total_submits.nonzero?
      @log.info "Overall success rate: #{(@total_succ_submits.to_f/@total_submits.to_f)*100}%
"
    else
      @log.info 'Overall success rate: 0%
'
    end
  end

  def update_total_counters(exhash)
      @total_users+=exhash[CURR_NUM_USERS]
      @total_submits+=exhash[TOTAL_SUBMITS]
      @total_succ_submits+=exhash[SUCC_SUBMITS]
  end

  def add_outputter(course,lang)
    @log.outputters << Log4r::FileOutputter.new("#{course}_#{lang}_statistics", :filename =>"log/#{course}_#{lang}_statistics.log", :formatter => @format)
  end

  def info_header (headline, header)
    @log.info headline
    @log.info header
    @log.info headline
  end

  def prepare_headline(header)
    headline=''
    for i in 0..header.to_s.length-1
      headline +='*'
    end
    headline
  end
end