require 'net/http'

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

  def random
    url = "https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_ps7DOSIZjOVdtuf1FOR7Y7k82yV3uRqOtyShlWvcZ4fU2lVxARhRizjUPGdwl8SH"
    uri = URI(url)
    response = Net::HTTP.get(uri)
    data = JSON.parse(response)
    catobj = { image: data[0]['url'] , breed: data[0]['breeds'][0]['name'], fact: data[0]['breeds'][0]['description']}
    puts catobj
    render json: catobj
  end

  private 
  def cat_params
    params.permit(:image, :fact, :breed)
  end 

  def set_cat
    @cat = Cat.find(params[:id])
  end

end
