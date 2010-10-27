class MilestonesController < ApplicationController

  # GET /milestones/1/edit
  def edit
    @milestone = Milestone.find(params[:id])
    render :action => "edit", :layout => false
  end

  # POST /milestones
  # POST /milestones.xml
  def create
    @milestone = Milestone.new(params[:milestone])
    respond_to do |format|
      if @milestone.save
        format.html { redirect_to :controller => "project_performances" }
      else
        format.html { redirect_to :controller => "project_performances" }
      end
    end
  end

  # PUT /milestones/1
  # PUT /milestones/1.xml
  def update
    @milestone = Milestone.find(params[:id])
    if @milestone.update_attributes(params[:milestone])
      flash[:status] = "true"
    else
      flash[:status] = ''
      @milestone.errors.each_full do |msg|
        if flash[:status] == ''
           flash[:status] += msg
        else
           flash[:status] += "<br />" + msg
        end
      end
    end
    render :action => "update", :layout => false
  end

  # DELETE /milestones/1
  # DELETE /milestones/1.xml
  def destroy
    @milestone = Milestone.find(params[:id])
    @milestone.destroy

    respond_to do |format|
      format.html { redirect_to(milestones_url) }
      format.xml  { head :ok }
    end
  end
end
