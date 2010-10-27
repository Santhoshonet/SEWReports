require 'test_helper'

class ProjectPerformacesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:project_performaces)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create project_performace" do
    assert_difference('ProjectPerformace.count') do
      post :create, :project_performace => { }
    end

    assert_redirected_to project_performace_path(assigns(:project_performace))
  end

  test "should show project_performace" do
    get :show, :id => project_performaces(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => project_performaces(:one).to_param
    assert_response :success
  end

  test "should update project_performace" do
    put :update, :id => project_performaces(:one).to_param, :project_performace => { }
    assert_redirected_to project_performace_path(assigns(:project_performace))
  end

  test "should destroy project_performace" do
    assert_difference('ProjectPerformace.count', -1) do
      delete :destroy, :id => project_performaces(:one).to_param
    end

    assert_redirected_to project_performaces_path
  end
end
