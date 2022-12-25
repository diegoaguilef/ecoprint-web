class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :delivery_addresses

  has_many :shopping_carts
  has_many :products, through: :shopping_carts
  accepts_nested_attributes_for :delivery_addresses
  validates :password, confirmation: true, unless: Proc.new { |a| a.password.blank? }
  validates :name, presence: true
  validates :role, presence: true

  def admin?
    role == "admin"
  end
end
