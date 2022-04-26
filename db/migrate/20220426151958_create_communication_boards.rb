class CreateCommunicationBoards < ActiveRecord::Migration[6.1]
  def change
    create_table :communication_boards do |t|
      t.string :board_name
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :visual_card, null: false, foreign_key: true

      t.timestamps
    end
  end
end
