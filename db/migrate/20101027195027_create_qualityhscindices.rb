class CreateQualityhscindices < ActiveRecord::Migration
  def self.up
    create_table :qualityhscindices do |t|
      t.date :month
      t.integer :qualityindex
      t.integer :hscindex

      t.timestamps
    end
  end

  def self.down
    drop_table :qualityhscindices
  end
end
