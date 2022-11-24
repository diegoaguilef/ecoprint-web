class Commune < ApplicationRecord
  belongs_to :region
  has_many :delivery_addresses
end
