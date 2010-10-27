require 'test_helper'

class RisksControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:risks)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create risk" do
    assert_difference('Risk.count') do
      post :create, :risk => { }
    end

    assert_redirected_to risk_path(assigns(:risk))
  end

  test "should show risk" do
    get :show, :id => risks(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => risks(:one).to_param
    assert_response :success
  end

  test "should update risk" do
    put :update, :id => risks(:one).to_param, :risk => { }
    assert_redirected_to risk_path(assigns(:risk))
  end

  test "should destroy risk" do
    assert_difference('Risk.count', -1) do
      delete :destroy, :id => risks(:one).to_param
    end

    assert_redirected_to risks_path
  end
end
