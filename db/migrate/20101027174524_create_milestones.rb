class CreateMilestones < ActiveRecord::Migration
  def self.up
    create_table :milestones do |t|
      t.date :month
      t.integer :build
      t.integer :unbuild
      t.timestamps
    end
  end

  def self.down
    drop_table :milestones
  end
end
