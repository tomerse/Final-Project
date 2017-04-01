class TestsParser

  def self.parse_tests(file)
    tests = []
    inputs = Xml.get_elements(file, 'tasks//task//tests//test','inputs')
    outputs = Xml.get_elements(file, 'tasks//task//tests//test','output')
    failures = Xml.get_elements(file, 'tasks//task//tests//test','failure')
    num_of_tasks = inputs.length
    if (not inputs.flatten.empty?) and (num_of_tasks == outputs.length) and (num_of_tasks  == failures.length)
      for i in 0..num_of_tasks-1
        params = Hash["input"=>inputs[i], "output"=>outputs[i], "failure"=>failures[i]]
        test_data = ChatbotTest.new(params)
        tests.push(test_data)
      end
    end
    return tests
  end

end