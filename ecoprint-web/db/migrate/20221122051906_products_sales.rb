class ProductsSales < ActiveRecord::Migration[7.0]
  def change
    create_table :products_transactions, id: false do |t|
      t.belongs_to :transaction
      t.belongs_to :product
    end
  end
end
