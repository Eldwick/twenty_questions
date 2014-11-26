require 'test_helper'

class GameControllerTest < ActionController::TestCase
  test "should get new" do
    get :new
    assert_response :success
  end

  test "should get create" do
    get :create
    assert_response :success
  end

  test "should get answerer" do
    get :answerer
    assert_response :success
  end

  test "should get questioner" do
    get :questioner
    assert_response :success
  end

  test "should get ask" do
    get :ask
    assert_response :success
  end

  test "should get respond" do
    get :respond
    assert_response :success
  end

  test "should get start" do
    get :start
    assert_response :success
  end

end
