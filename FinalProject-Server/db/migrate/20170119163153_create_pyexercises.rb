class CreatePyexercises < ActiveRecord::Migration
  def change
    create_table :pyexercises do |t|

      t.timestamps
    end
  end
end
