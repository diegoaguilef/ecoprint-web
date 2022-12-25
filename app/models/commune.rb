class Commune < ApplicationRecord
  belongs_to :region
  has_many :delivery_addresses

  validates :name, presence: true

end
