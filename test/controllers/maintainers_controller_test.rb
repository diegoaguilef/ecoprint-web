require "test_helper"

class MaintainersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get maintainers_index_url
    assert_response :success
  end

  test "should get new" do
    get maintainers_new_url
    assert_response :success
  end

  test "should get edit" do
    get maintainers_edit_url
    assert_response :success
  end

  test "should get show" do
    get maintainers_show_url
    assert_response :success
  end

  test "should get create" do
    get maintainers_create_url
    assert_response :success
  end

  test "should get update" do
    get maintainers_update_url
    assert_response :success
  end

  test "should get destroy" do
    get maintainers_destroy_url
    assert_response :success
  end
end
