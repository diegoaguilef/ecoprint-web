require "test_helper"

class MarketControllerTest < ActionDispatch::IntegrationTest
  test "should get products" do
    get market_products_url
    assert_response :success
  end

  test "should get shopping_cart" do
    get market_shopping_cart_url
    assert_response :success
  end

  test "should get checkout" do
    get market_checkout_url
    assert_response :success
  end

  test "should get post_sale" do
    get market_post_sale_url
    assert_response :success
  end
end
