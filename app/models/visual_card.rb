class VisualCard < ApplicationRecord
    has_many :communication_boards
    has_many :users, through: :communication_boards

    validates :name, :image, presence: true
end
