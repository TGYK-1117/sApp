class CreateCats < ActiveRecord::Migration[7.0]
  def change
    create_table :cats do |t|
      t.string :image, null: false
      t.string :fact, null: false
      t.string :breed, null: false
      t.timestamps
    end
  end
end
