class CoursesController < ApplicationController
  # GET /courses
  # GET /courses.json
  def index
    @courses = CourseFactory.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @courses }
    end
  end


  # GET /courses/1
  # GET /courses/1.json
  def get_exercise
    statsCollector = CoursesStatsFactory.getStatsCollector params[:course_name], params[:lan_name]
    statsCollector.incNumOfUsers params[:ex_id]
    exercise_reader = CourseFactory.get_exercise_reader(params[:course_name])
    exercise_file = CourseFactory.get_exercise_file(params[:course_name], params[:lan_name], params[:ex_id])
    exercise = exercise_reader.build_exercise(exercise_file)
    respond_to do |format|
      format.json { render json: exercise }
    end
  end

  def get_all_course_exercises
    exercises_folder_path = CourseFactory.get_exercise_folder(params[:course_name], params[:lan_name])
    exercise_reader = CourseFactory.get_exercise_reader(params[:course_name])
    exercises_topics = CourseFactory.get_all_exercises(exercise_reader, exercises_folder_path)
    respond_to do |format|
      format.json { render json: exercises_topics }
    end
  end

  # GET /courses/1
  # GET /courses/1.json
  def show
    #should be read from xml
    courses = CourseFactory.get_all_courses
    respond_to do |format|
      format.json {render :json => courses }
    end
  end


  # GET /courses/new
  # GET /courses/new.json
  def new
    @course = CourseFactory.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @course }
    end
  end

  # GET /courses/1/edit
  def edit
    @course = CourseFactory.get_exercise_file(params[:course_name], params[:lan_name], params[:ex_id])
  end

  # POST /courses
  # POST /courses.json
  def create
    @course = CourseFactory.new(params[:course])

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
    @course = CourseFactory.get_exercise_file(params[:course_name], params[:lan_name], params[:ex_id])

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
    code_handler = CourseFactory.get_code_handler(params[:course_name], params[:lan_name])
    exercise_file = CourseFactory.get_exercise_file(params[:course_name], params[:lan_name], params[:ex_id])
    @code_result = code_handler.run_exercise_code(params[:code], params[:args], exercise_file)
    render :json => {:result => @code_result}
  end

  # POST /courses
  # POST /courses.json
  def compile
    statsCollector = CoursesStatsFactory.getStatsCollector params[:course_name], params[:lan_name]
    statsCollector.incTotalSubmits(params[:ex_id])
    code_handler = CourseFactory.get_code_handler(params[:course_name], params[:lan_name])
    exercise_file = CourseFactory.get_exercise_file(params[:course_name], params[:lan_name], params[:ex_id])
    (@success, @error) = code_handler.check_exercise_code(params[:code], params[:ex_id] ,exercise_file)
    if @success == 'success'
      statsCollector.incSuccSubmits(params[:ex_id])
    end
    respond_to do |format|
      format.json {render :json => {:status => @success,
                                    :error => @error}}
    end
  end

  # DELETE /courses/1
  # DELETE /courses/1.json
  def destroy
    @course = CourseFactory.get_exercise_file(params[:course_name], params[:lan_name], params[:ex_id])
    @course.destroy

    respond_to do |format|
      format.html { redirect_to courses_url }
      format.json { head :no_content }
    end
  end
end
