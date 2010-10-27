require 'test_helper'

class ProjectPerformancesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:project_performances)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create project_performance" do
    assert_difference('ProjectPerformance.count') do
      post :create, :project_performance => { }
    end

    assert_redirected_to project_performance_path(assigns(:project_performance))
  end

  test "should show project_performance" do
    get :show, :id => project_performances(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => project_performances(:one).to_param
    assert_response :success
  end

  test "should update project_performance" do
    put :update, :id => project_performances(:one).to_param, :project_performance => { }
    assert_redirected_to project_performance_path(assigns(:project_performance))
  end

  test "should destroy project_performance" do
    assert_difference('ProjectPerformance.count', -1) do
      delete :destroy, :id => project_performances(:one).to_param
    end

    assert_redirected_to project_performances_path
  end
end
