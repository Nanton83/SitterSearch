class Api::V1::SittersController < ApplicationController

    def index
        @sitters = Sitter.all
        render json: @sitters
    end 

    def show
        @sitter = Sitter.find_by(id: params[:id])
        render json: @sitter
    end

    def create
        @sitter = Sitter.create(sitter_params)
        render json: @sitter
    end

    def update
        @sitter = Sitter.find_by(id: params[:id])
        @sitter.update(sitter_params)
        render json: @sitter
    end 

    def destroy
        @sitter = Sitter.find_by(id: params[:id])
        @sitter.delete 
        render json: {sitterId: @sitter.id}
    end

private

    def sitter_params
        params.require(:sitter).permit(:name)
    end

end
