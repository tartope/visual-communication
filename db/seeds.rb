# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Deleting old data..."

VisualCard.destroy_all

puts "🌱 Creating visual cards..."
VisualCard.create(name: "break", image: "/images/break.png")
VisualCard.create(name: "bussing", image: "/images/bussing.png")
VisualCard.create(name: "color", image: "/images/color.png")
VisualCard.create(name: "computer", image: "/images/computer.png")
VisualCard.create(name: "goldfish", image: "/images/goldfish.png")
VisualCard.create(name: "legos", image: "/images/legos.png")
VisualCard.create(name: "listen to music", image: "/images/listen-to-music.png")
VisualCard.create(name: "play", image: "/images/play.png")
VisualCard.create(name: "tablet", image: "/images/tablet.png")
VisualCard.create(name: "work", image: "/images/work.png") 


puts "Done seeding!"