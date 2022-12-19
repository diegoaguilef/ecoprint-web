class MaintainersController < ApplicationController
  before_action :set_model
  before_action :set_entity, only: %i[edit show update destroy]
  before_action :set_entity_columns

  include Pagy::Backend

  layout "dashboard"

  # GET /maintainers?entity_class="class_name"
  def index
    #authorize! :maintainer, :index
    @pagy, @entities = pagy(@model.order("#{@order} #{@key}"))
    respond_to do |format|
      format.html
    end
  end

  def new
    @entity = @model.new
  end

  def show
  end

  def edit
  end

  # POST /maintainers?entity_class="class_name"
  def create
    #authorize! :maintainer, :create
    @entity = params[:massive] ? nil : @model.new(entity_params)
    respond_to do |format|
      if @entity.save
        format.html { redirect_to maintainers_path(entity_class: params[:entity_class]), notice: "Creado" }
        format.json { render json: @entity, status: :created }
      else
        format.html { render :new }
        format.json { render json: @entity.errors.full_messages, status: :unprocessable_entity }
      end
    end
  end

  # PUT/PATCH /maintainers/1?entity_class="class_name"
  def update
    #authorize! :maintainer, :update
    respond_to do |format|
      if @entity.update(entity_params)
        format.html { redirect_to maintainers_path(entity_class: params[:entity_class]), notice: "Actualizado" }
        format.json { render json: @entity, status: :ok }
      else
        format.html { render :edit }
        format.json { render json: @entity.errors.full_messages, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /maintainers/1?entity_class="class_name"
  def destroy
    #authorize! :maintainer, :destroy
    @entity.destroy
    
    respond_to do |format|
      format.html { redirect_to maintainers_path(entity_class: params[:entity_class]), notice: "Mantenedor eliminado con éxito" }
      format.json { head :no_content }
    end
  end

  def massive_load

  end

  private

    def set_model
      @model = params[:entity_class].classify.constantize
    end

    def set_entity
      @entity = @model.find(params[:id])
    end

    def set_entity_columns
      @entity_columns = @model.column_names.map(&:to_sym)
    end

    def set_template
      entity_class = params[:entity_class]
      @template = "#{entity_class.pluralize}/#{action_name}"
    end

    def entity_params
      params.require(params[:entity_class]).permit(
        :name,
        :description,
        :category_id,
        :sub_category_id,
        :region_id,
        :commune_id,
        :price,
        :stock,
        :user_id,
        :quantity
      )
    end

    def entities_params
      params.permit(entities: [
        :name,
        :description,
        :code,
        :action,
        :controller,
        :resource,
        :condition,
        :business_line,
        :branch_office_id,
        :region_id,
        :company_id,
        :afp_id,
        :apv_id,
        :health_institution_id,
        :educational_level_id,
        :required,
        :personnel_division_id
      ])
    end
end
