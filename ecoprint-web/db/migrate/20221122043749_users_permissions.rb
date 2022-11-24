class UsersPermissions < ActiveRecord::Migration[7.0]
  def change
    create_table :users_permissions, id: false do |t|
      t.belongs_to :user
      t.belongs_to :permission
    end
  end
end
