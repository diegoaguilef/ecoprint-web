class ShoppingCart < ApplicationRecord
  belongs_to :user
  belongs_to :product

  validate :product_stock

  private

  def product_stock
    errors.add(:base, "Cantidad excede stock del producto") if product.stock < quantity
  end
end
