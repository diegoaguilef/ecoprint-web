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
  end

  def shopping_cart
  end

  def checkout
  end

  def post_sale
  end
end
