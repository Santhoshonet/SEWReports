class ProjectPerformance < ActiveRecord::Base

  validates_uniqueness_of :month

  validates_numericality_of :lrecontract,:lrepmc,:pv,:spi,:contractindex,:cpi
  
  validates_presence_of :month
  validates_presence_of :contractindex
  validates_presence_of :lrecontract
  validates_presence_of :lrepmc
  validates_presence_of :pv
  validates_presence_of :cpi
  validates_presence_of :spi

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
