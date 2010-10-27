require 'test_helper'

class QualityhscindicesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:qualityhscindices)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create qualityhscindex" do
    assert_difference('Qualityhscindex.count') do
      post :create, :qualityhscindex => { }
    end

    assert_redirected_to qualityhscindex_path(assigns(:qualityhscindex))
  end

  test "should show qualityhscindex" do
    get :show, :id => qualityhscindices(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => qualityhscindices(:one).to_param
    assert_response :success
  end

  test "should update qualityhscindex" do
    put :update, :id => qualityhscindices(:one).to_param, :qualityhscindex => { }
    assert_redirected_to qualityhscindex_path(assigns(:qualityhscindex))
  end

  test "should destroy qualityhscindex" do
    assert_difference('Qualityhscindex.count', -1) do
      delete :destroy, :id => qualityhscindices(:one).to_param
    end

    assert_redirected_to qualityhscindices_path
  end
end
