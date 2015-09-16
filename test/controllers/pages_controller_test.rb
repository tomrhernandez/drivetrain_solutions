require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  def setup
    @base_title = "DriveTrain Solutions"
  end
  
  test "should get home" do
    get :home
    assert_response :success
    assert_select "title", "#{@base_title}"
  end
  
end
