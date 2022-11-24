class Product < ApplicationRecord
  has_one_attached :image
  belongs_to :sub_category

  scope :categories, -> { joins(sub_category: :category).map(&:category).uniq }

  def category
    sub_category.category
  end
end
