require "test_helper"

class CommunesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @commune = communes(:one)
  end

  test "should get index" do
    get communes_url
    assert_response :success
  end

  test "should get new" do
    get new_commune_url
    assert_response :success
  end

  test "should create commune" do
    assert_difference("Commune.count") do
      post communes_url, params: { commune: { city_id: @commune.city_id, name: @commune.name } }
    end

    assert_redirected_to commune_url(Commune.last)
  end

  test "should show commune" do
    get commune_url(@commune)
    assert_response :success
  end

  test "should get edit" do
    get edit_commune_url(@commune)
    assert_response :success
  end

  test "should update commune" do
    patch commune_url(@commune), params: { commune: { city_id: @commune.city_id, name: @commune.name } }
    assert_redirected_to commune_url(@commune)
  end

  test "should destroy commune" do
    assert_difference("Commune.count", -1) do
      delete commune_url(@commune)
    end

    assert_redirected_to communes_url
  end
end
