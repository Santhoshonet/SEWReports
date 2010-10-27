class QualityhscindicesController < ApplicationController
  # GET /qualityhscindices/1/edit
  def edit
    @qualityhscindex = Qualityhscindex.find(params[:id])
    render :action => "edit", :layout => false
  end

  # POST /qualityhscindices
  # POST /qualityhscindices.xml
  def create
    @qualityhscindex = Qualityhscindex.new(params[:qualityhscindex])
    respond_to do |format|
      if @qualityhscindex.save
        format.html { redirect_to :controller => "issues" }
      else
        format.html { redirect_to :controller => "issues" }
      end
    end
  end

  # PUT /qualityhscindices/1
  # PUT /qualityhscindices/1.xml
  def update
    @qualityhscindex = Qualityhscindex.find(params[:id])
    if @qualityhscindex.update_attributes(params[:qualityhscindex])
     flash[:status] = "true"
    else
     flash[:status] = ''
     @qualityhscindex.errors.each_full do |msg|
        if flash[:status] == ''
          flash[:status] += msg
        else
          flash[:status] += "<br />" + msg
        end
      end
    end
     render :action => "update", :layout => false
  end

  # DELETE /qualityhscindices/1
  # DELETE /qualityhscindices/1.xml
  def destroy
    @qualityhscindex = Qualityhscindex.find(params[:id])
    @qualityhscindex.destroy
    respond_to do |format|
      format.html { redirect_to(qualityhscindices_url) }
      format.xml  { head :ok }
    end
  end
end
