class IssuesController < ApplicationController
  # GET /issues
  # GET /issues.xml
  def index
    @issues = Issue.find(:all,:order => 'id')
    @risks = Risk.find(:all, :order => 'id')

    @qualityhscindices = Qualityhscindex.find(:all,:order => 'id')
    @qualityhscindex = Qualityhscindex.new

    @risk = Risk.new
    @issue = Issue.new

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @issues }
    end
  end

  # GET /issues/1/edit
  def edit
    @issue = Issue.find(params[:id])
    render :action => "edit", :layout => false
  end

  # POST /issues
  # POST /issues.xml
  def create
    @issue = Issue.new(params[:issue])
    respond_to do |format|
      if @issue.save
        format.html { redirect_to(:action => "index", :notice => 'Issue was successfully created.') }
        format.xml  { render :xml => @issue, :status => :created, :location => @issue }
      else
        format.html { redirect_to(:action => "index") }
        flash[:error] = ''
        @issue.errors.each_full do |msg|
          if flash[:error] == ''
              flash[:error] += msg
            else
              flash[:error] += "<br />" + msg
            end
        end
      end
    end
  end

  # PUT /issues/1
  # PUT /issues/1.xml
  def update
    @issue = Issue.find(params[:id])
    if @issue.update_attributes(params[:issue])
       flash[:status] = "true"
    else
        flash[:status] = ''
          @issue.errors.each_full do |msg|
            if flash[:status] == ''
              flash[:status] += msg
            else
              flash[:status] += "<br />" + msg
            end
          end
    end
    render :action => "update", :layout => false
  end

  # DELETE /issues/1
  # DELETE /issues/1.xml
  def destroy
    @issue = Issue.find(params[:id])
    @issue.destroy

    respond_to do |format|
      format.html { redirect_to(issues_url) }
      format.xml  { head :ok }
    end
  end
end
