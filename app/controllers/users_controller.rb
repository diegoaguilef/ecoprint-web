class UsersController < ApplicationController
  before_action :set_user, only: %i[show edit update destroy]
  before_action :authenticate_user!
  include Pagy::Backend

  # GET /users
  # GET /users.json
  def index
    @users = User.all
    respond_to do |format|
      format.html {
        @pagy, @users = pagy(@users.order("#{@order} #{@key}"))
        @users = @users.as_json(methods: %i[last_sign_in_at role_name])
      }
      format.xlsx { render xlsx: "users", template: "users/reports/index.xlsx.axlsx" }
    end
  end

  # GET /users/1
  # GET /users/1.json
  def show
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)
    respond_to do |format|
      if @user.save
        format.html { redirect_to users_url, notice: 'Usuario creado con éxito' }
        format.json { render json: @user, status: :created }
      else
        format.html { render :new }
        format.json { render json: @user.errors.full_messages, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to redirect_user, notice: 'Usuario actualizado con éxito.' }
        format.json { render json: @user, status: :ok  }
      else
        format.html { render :edit }
        format.json { render json: @user.errors.full_messages, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    if User.all.size == 1
      respond_to do |format|
        format.html { redirect_to redirect_user, alert: 'No puedes eliminar todos los usuarios.' }
        format.json { head :no_content }
      end
      return
    end
    @user.destroy
    respond_to do |format|
      format.html { redirect_to redirect_user, notice: 'Usuario eliminado con éxito.' }
      format.json { head :no_content }
    end
  end

  def profile
  end

  private

  # Use callbacks to share common setup or constraints between actions.

  def set_user
    @user = User.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def user_params
    params.require(:user)
      .permit(
        :email,
        :name,
        :password,
        :password_confirmation,
        :role,
        delivery_addresses_attributes: [
          :id,
          :name,
          :street_name,
          :street_number,
          :postal_code,
          :commune_id  
        ],
        user_permissions_attributes: [
          :id,
          :user_id,
          :permission_id,
          :_destroy
        ]
      )
  end
end
