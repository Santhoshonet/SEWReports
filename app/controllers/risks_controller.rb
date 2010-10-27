class RisksController < ApplicationController

  # GET /risks/1/edit
  def edit
    @risk = Risk.find(params[:id])
    render :action => "edit", :layout => false
  end

  # POST /risks
  # POST /risks.xml
  def create
    @risk = Risk.new(params[:risk])
    respond_to do |format|
      if @risk.save
        format.html { redirect_to :controller => "issues" }
      else
        format.html { redirect_to :controller => "issues" }
      end
    end
  end

  # PUT /risks/1
  # PUT /risks/1.xml
  def update
    @risk = Risk.find(params[:id])
      if @risk.update_attributes(params[:risk])
        flash[:status] = "true"
      else
        flash[:status] = ''
        @risk.errors.each_full do |msg|
          if flash[:status] == ''
            flash[:status] += msg
          else
            flash[:status] += "<br />" + msg
          end
        end
      end
     render :action => "update", :layout => false
  end

  # DELETE /risks/1
  # DELETE /risks/1.xml
  def destroy
    @risk = Risk.find(params[:id])
    @risk.destroy

    respond_to do |format|
      format.html { redirect_to(risks_url) }
      format.xml  { head :ok }
    end
  end
end
