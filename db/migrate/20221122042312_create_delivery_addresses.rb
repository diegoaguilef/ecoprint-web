class CreateDeliveryAddresses < ActiveRecord::Migration[7.0]
  def change
    create_table :delivery_addresses do |t|
      t.string :name
      t.string :street_name
      t.integer :street_number
      t.integer :postal_code
      t.string :alias
      t.string :additional_info
      t.references :commune, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
