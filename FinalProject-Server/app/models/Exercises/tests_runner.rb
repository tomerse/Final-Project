class TestsRunner

  def self.run(languagename, coursename, ex_id)
    if(languagename == 'python')
      if(coursename == 'chatbot')
        tests = ExerciseReader.build_tests(languagename, coursename, ex_id)
        #run tests
      end
    end

  end



end