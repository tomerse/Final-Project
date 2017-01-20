class CreateSkulpts < ActiveRecord::Migration
  def change
    create_table :skulpts do |t|

      t.timestamps
    end
  end
end
