class Product < ApplicationRecord
  has_one_attached :image
  belongs_to :sub_category

  scope :categories, -> { joins(sub_category: :category).map(&:category).uniq }

  validates :name, presence: true
  validates :description, presence: true
  validates :stock, presence: true
  validates :price, presence: true


  def category
    sub_category.category
  end
end
