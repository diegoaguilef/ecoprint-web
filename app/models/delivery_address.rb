class DeliveryAddress < ApplicationRecord
  belongs_to :commune
  belongs_to :user

  validates :name, presence: true
  validates :street_name, presence: true
  validates :street_number, presence: true
  validates :postal_code, presence: true
  validates :commune_id, presence: true

end
