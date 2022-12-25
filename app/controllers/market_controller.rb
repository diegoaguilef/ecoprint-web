class MarketController < ApplicationController
  def products
    @q = Product.order(:name).ransack(params[:q])
    @products = @q.result(distinct: true).includes(sub_category: :category)
    @selected_categories = @products.categories
    @categories = Category.all
    @sub_categories = @selected_categories.map { |category| category.sub_categories}.flatten
  end

  def categories
    @categories = Category.all
  end

  def product_detail
    id = params[:id]
    @product = Product.find(id)
    @shopping_cart = ShoppingCart.new

  end

  def shopping_cart
    @cart_products = current_user.shopping_carts
  end

  def remove_cart_product
    ShoppingCart.find(params[:id]).destroy
    redirect_to market_shopping_cart_path
  end

  def add_cart_product
    quantity = params[:quantity]
    product_id = params[:product_id]
    @shopping_cart = ShoppingCart.new(user: current_user, product_id: product_id, quantity: quantity)
    @shopping_cart.save
    redirect_to market_shopping_cart_path 
  end

  def checkout
  end

  def post_sale
  end
end
