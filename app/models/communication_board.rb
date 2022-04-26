class CommunicationBoard < ApplicationRecord
  belongs_to :user
  belongs_to :visual_card
end
