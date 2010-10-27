class ProjectsController < ApplicationController
  def index
    @projects = Project.find(:all,:order => 'id')
    @project = Project.new
    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @projects }
    end
  end

  # GET /projects/1/edit
  def edit
    @project = Project.find(params[:id])
    render :action => "edit", :layout => false
  end

  # POST /projects
  # POST /projects.xml
  def create
    @project = Project.new(params[:project])
    respond_to do |format|
      if @project.save
        format.html { redirect_to(:action => "index" , :id => @project.id) }
      else
        format.html { redirect_to(:action => "index") }
        flash[:error] = ''
        @project.errors.each_full do |msg|
          if flash[:error] == ''
              flash[:error] += msg
            else
              flash[:error] += "<br />" + msg
            end
        end
      end
    end
  end

  # PUT /projects/1
  # PUT /projects/1.xml
  def update
    @project = Project.find(params[:id])
      if @project.update_attributes(params[:project])
          flash[:status] = "true"
      else
          flash[:status] = ''
          @project.errors.each_full do |msg|
            if flash[:status] == ''
              flash[:status] += msg
            else
              flash[:status] += "<br />" + msg
            end
          end
      end
    render :action => "update", :layout => false
  end

  # DELETE /projects/1
  # DELETE /projects/1.xml
  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    respond_to do |format|
      format.html { redirect_to(projects_url) }
      format.xml  { head :ok }
    end
  end
end
