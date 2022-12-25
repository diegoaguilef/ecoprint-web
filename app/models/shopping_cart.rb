class ShoppingCart < ApplicationRecord
  belongs_to :user
  belongs_to :product

  validate :product_stock
  after_commit :less_stock

  private

  def product_stock
    errors.add(:base, "Cantidad excede stock del producto") if product.stock < quantity
  end

  def less_stock
    stock = product.stock - quantity
    product.update(stock: stock)
  end
end
