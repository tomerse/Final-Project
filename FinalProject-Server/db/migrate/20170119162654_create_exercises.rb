class CreateExercises < ActiveRecord::Migration
  def change
    create_table :exercises do |t|

      t.timestamps
    end
  end
end
