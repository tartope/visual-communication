class CreateVisualCards < ActiveRecord::Migration[6.1]
  def change
    create_table :visual_cards do |t|
      t.string :name
      t.string :image

      t.timestamps
    end
  end
end
