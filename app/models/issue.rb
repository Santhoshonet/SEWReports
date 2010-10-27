class Issue < ActiveRecord::Base

  validates_uniqueness_of :month
  validates_presence_of :active,:closed,:month

  validate :datevalidate

  def datevalidate
    begin
      dd =self.month.to_date
      return true
    rescue
      errors.add("Month format ");
      return false;
    end
  end
  
end
