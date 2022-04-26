class User < ApplicationRecord
    has_many :communication_boards
    has_many :visual_cards, through: :communication_boards

    has_secure_password

    validates :username, presence: true, uniqueness: :true
end
