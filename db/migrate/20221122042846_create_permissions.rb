class CreatePermissions < ActiveRecord::Migration[7.0]
  def change
    create_table :permissions do |t|
      t.string :name
      t.string :action
      t.string :controller
      t.string :resource
      t.string :condition
      t.boolean :enabled

      t.timestamps
    end
  end
end
