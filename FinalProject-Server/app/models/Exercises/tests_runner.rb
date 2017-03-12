class TestsRunner

  def self.run(languagename, coursename, ex_id, file_to_run)
    ans = []
    if(languagename == 'python')
      if(coursename == 'chatbot')
        tests = ExerciseReader.build_tests(languagename, coursename, ex_id)
        tests.each{ |test|
          output = PythonCompiler.run_file(file_to_run,test.get_input())
          if (test.get_expected_output() <=> output) != 0
            ans[0] = false
            ans[1] = test.get_failure()
            return ans
          end
        }
        ans[0] = true
        ans[1] = ""
      end
    end
    return ans

  end



end