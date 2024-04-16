class AddBreedToCats < ActiveRecord::Migration[7.0]
  def change
    add_column :cats, :breed, :string
  end
end
