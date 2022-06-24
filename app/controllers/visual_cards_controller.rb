class VisualCardsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response

    def index 
        visual_cards = VisualCard.all.order(:name)
        render json: visual_cards, status: :ok
    end

    def show
        visual_card = find_visual_card
        render json: visual_card, status: :ok
    end

    def create
        visual_card = VisualCard.create!(visual_card_params)
        render json: visual_card, status: :created
    rescue ActiveRecord::RecordInvalid => invalid 
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def destroy
        visual_card = find_visual_card
        visual_card.destroy
        head :no_content
    end

    private

    def visual_card_params
        params.permit(:name, :image)
    end

    def find_visual_card
        VisualCard.find(params[:id])
    end

    def record_not_found_response
        render json: {error: "Visual card not found"}, status: :not_found
    end

end
