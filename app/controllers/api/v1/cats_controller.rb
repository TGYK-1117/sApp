class Api::V1::CatsController < ApplicationController

  before_action :set_cat, only: %i[show destroy]

  def index
    cat = Cat.all.order(created_at: :desc)
    render json: cat
  end

  def create
    cat = Cat.create!(cat_params)
    if cat
      render json: cat
    else 
      render json: cat
    end 
  end

  def show
    render json: @cat
  end

  def destroy
    @cat&.destroy
    render json: { message: 'Cat deleted!' }
  end

  private 
  def cat_params
    params.permit(:image, :fact, :breed)
  end 

  def set_cat
    @cat = Cat.find(params[:id])
  end

end
