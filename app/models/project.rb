class Project < ActiveRecord::Base

  validates_uniqueness_of :name , :case_sensitive => false
  validates_presence_of :name,:location

  
end
