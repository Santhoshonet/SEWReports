class ProjectPerformancesController < ApplicationController
  # GET /project_performances
  # GET /project_performances.xml
  def index
    @project_performances = ProjectPerformance.find(:all, :order => 'id')
    @milestones = Milestone.find(:all,:order => 'id')
    @milestone = Milestone.new
    @project_performance = ProjectPerformance.new
    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @project_performances }
    end
  end

   
  # GET /project_performances/1/edit
  def edit
    @project_performance = ProjectPerformance.find(params[:id])
    render :action => "edit", :layout => false
  end

  # POST /project_performances
  # POST /project_performances.xml
  def create
    @project_performance = ProjectPerformance.new(params[:project_performance])
    respond_to do |format|
      if @project_performance.save
        format.html { redirect_to(:action => "index" , :id => @project_performance.id) }
      else
        format.html { redirect_to(:action => "index") }
        flash[:error] = ''
        @project_performance.errors.each_full do |msg|
          if flash[:error] == ''
              flash[:error] += msg
            else
              flash[:error] += "<br />" + msg
            end
        end
      end
    end
  end

  # PUT /project_performances/1
  # PUT /project_performances/1.xml
  def update
    @project_performance = ProjectPerformance.find(params[:id])
     if @project_performance.update_attributes(params[:project_performance])
          flash[:status] = "true"
      else
          flash[:status] = ''
          @project_performance.errors.each_full do |msg|
            if flash[:status] == ''
              flash[:status] += msg
            else
              flash[:status] += "<br />" + msg
            end
          end
      end
    render :action => "update", :layout => false
  end

  # DELETE /project_performances/1
  # DELETE /project_performances/1.xml
  def destroy
    @project_performance = ProjectPerformance.find(params[:id])
    @project_performance.destroy

    respond_to do |format|
      format.html { redirect_to(project_performances_url) }
      format.xml  { head :ok }
    end
  end
end
