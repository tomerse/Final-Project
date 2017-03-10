class CoursesController < ApplicationController
  # GET /courses
  # GET /courses.json
  def index
    @courses = Course.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @courses }
    end
  end

  # GET /courses/1
  # GET /courses/1.json
  def show
    @language = params[:lan_name]
    @course = params[:course_name]
    @exercise = ExerciseReader.build_exercise(@language, @course, params[:ex_id])
    respond_to do |format|
      #format.html # show.html.erb
      format.json { render json: @exercise }
    end
  end

  # GET /courses/new
  # GET /courses/new.json
  def new
    @course = Course.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @course }
    end
  end

  # GET /courses/1/edit
  def edit
    @course = Course.find(params[:id])
  end

  # POST /courses
  # POST /courses.json
  def create
    @course = Course.new(params[:course])

    respond_to do |format|
      if @course.save
        format.html { redirect_to @course, notice: 'Course was successfully created.' }
        format.json { render json: @course, status: :created, location: @course }
      else
        format.html { render action: "new" }
        format.json { render json: @course.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /courses/1
  # PUT /courses/1.json
  def update
    @course = Course.find(params[:id])

    respond_to do |format|
      if @course.update_attributes(params[:course])
        format.html { redirect_to @course, notice: 'Course was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @course.errors, status: :unprocessable_entity }
      end
    end
  end

  # POST /courses
  # POST /courses.json
  def run
    require 'Compilers/compiler'
    @language = params[:lan_name]
    @code = params[:code]
    @args = params[:args]
    @ex_id = params[:ex_id]
    @code_result = Compiler.run_code(@language, @code, @args)
    print "code_result = " + @code_result + "\n"
    render :json => @code_result
  end

  # POST /courses
  # POST /courses.json
  def compile
    require 'Compilers/compiler'
    @language = params[:lan_name]
    @ex_id = params[:ex_id]
    @code = params[:code]
    @ans = Compiler.compile_code(@language, @code)
    @success = @ans[0]
    @error = @ans[1]
    respond_to do |format|
      format.json {render :json => {:success => @success,
                                    :error => @error}}
    end
  end

  # DELETE /courses/1
  # DELETE /courses/1.json
  def destroy
    @course = Course.find(params[:id])
    @course.destroy

    respond_to do |format|
      format.html { redirect_to courses_url }
      format.json { head :no_content }
    end
  end
end
