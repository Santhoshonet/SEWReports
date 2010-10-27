class CreateProjectPerformances < ActiveRecord::Migration
  def self.up
    create_table :project_performances do |t|
      t.date :month
      t.integer :pv
      t.integer :lrecontract
      t.integer :lrepmc
      t.float :contractindex
      t.float :cpi
      t.float :spi
      t.timestamps
    end
  end

  def self.down
    drop_table :project_performances
  end
end
