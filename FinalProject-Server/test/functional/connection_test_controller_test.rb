require 'test_helper'

class ConnectionTestControllerTest < ActionController::TestCase
  test "should get con_test" do
    get :con_test
    assert_response :success
  end

end
