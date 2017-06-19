require 'test_helper'
require 'rails/performance_test_help'
require 'benchmark'
require 'json'


class BrowsingTest < ActiveSupport::TestCase
  include Net
  # Refer to the documentation for all available options
  # self.profile_options = { :runs => 5, :metrics => [:wall_time, :memory]
  #                          :output => 'tmp/performance', :formats => [:flat] }

  def test_homepage
    print_test_name self.method_name
    uri = URI(APP_URL)
    responses =[]
    users_threads = []
    Benchmark.bm(8) do |bm|
      i=0
        NUM_OF_USERS.times do
          bm.report("user_#{i}:") do
            users_threads << Thread.new{
              HTTP.start(uri.host, uri.port) do |http|
                req = HTTP::Get.new uri
                res = http.request req
                responses << res
              end
            }
            i+=1
          end
        end
        users_threads.each(&:join)
    end
    responses.each do |res|
      assert_not_nil(res)
      assert(res.is_a? HTTPSuccess)
    end
  end

  def test_course_selection
    print_test_name self.method_name
    url = COURSE_REQ_URL
    stage_id = 1 + Random.rand(7)
    url = url.sub('${prog_lang}',PROGLANGUAGE).sub('${course_name}',COURSEFOLDER).sub('${stage_id}',stage_id.to_s)
    uri = URI(url)
    responses =[]
    users_threads = []
    Benchmark.bm(8) do |bm|
      i=0
      NUM_OF_USERS.times do
        bm.report("user_#{i}:") do
          users_threads << Thread.new{
            HTTP.start(uri.host, uri.port) do |http|
              req = HTTP::Get.new uri
              res = http.request req
              responses << res
            end
          }
          i+=1
        end
      end
      users_threads.each(&:join)
    end
    responses.each do |res|
      assert_not_nil(res)
      assert(res.is_a? HTTPSuccess)
    end
  end

  def test_compile_request
    print_test_name self.method_name
    url = COMP_REQ_URL
    url = url.sub('${prog_lang}',PROGLANGUAGE).sub('${course_name}',COURSEFOLDER)
    responses =[]
    users_threads = []
    input = read_test_input COMP_SUCC_INPUT
    body = {code: input.to_s}.to_json
    Benchmark.bm(8) do |bm|
      i=0
      NUM_OF_USERS.times do
        bm.report("user_#{i}:") do
          users_threads << Thread.new{
            stage_id = 1 + Random.rand(2)
            url = url.sub('${stage_id}',stage_id.to_s)
            uri = URI(url)
            req = HTTP::Post.new uri
            req.body = body
            req.content_type = 'application/json'
              HTTP.start(uri.host, uri.port) do |http|
                res = http.request req
                responses << res
              end
          }
          i+=1
        end
      end
      users_threads.each(&:join)
    end
    responses.each do |res|
      assert_not_nil(res)
      assert(res.is_a? HTTPSuccess)
    end
  end

  def test_run_code_request
    print_test_name self.method_name
    url = RUN_REQ_URL
    url = url.sub('${prog_lang}',PROGLANGUAGE).sub('${course_name}',COURSEFOLDER)
    responses =[]
    users_threads = []
    input = read_test_input COMP_SUCC_INPUT
    body = {code: input.to_s, args: 'segal'}.to_json
    Benchmark.bm(8) do |bm|
      i=0
      NUM_OF_USERS.times do
        bm.report("user_#{i}:") do
          users_threads << Thread.new{
            stage_id = 1 + Random.rand(2)
            url = url.sub('${stage_id}',stage_id.to_s)
            uri = URI(url)
            req = HTTP::Post.new uri
            req.body = body
            req.content_type = 'application/json'
            HTTP.start(uri.host, uri.port) do |http|
              res = http.request req
              responses << res
            end
          }
          i+=1
        end
      end
      users_threads.each(&:join)
    end
    responses.each do |res|
      assert_not_nil(res)
      assert(res.is_a? HTTPSuccess)
    end
  end

end
