class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :netid
      t.integer :points
      t.integer :reports
      t.string :dorm

      t.timestamps
    end
  end
end
