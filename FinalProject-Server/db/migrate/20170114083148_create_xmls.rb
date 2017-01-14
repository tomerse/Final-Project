class CreateXmls < ActiveRecord::Migration
  def change
    create_table :xmls do |t|

      t.timestamps
    end
  end
end
