# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'net/http'

url = "https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_ps7DOSIZjOVdtuf1FOR7Y7k82yV3uRqOtyShlWvcZ4fU2lVxARhRizjUPGdwl8SH"

5.times do |i|
	uri = URI(url)
	response = Net::HTTP.get(uri)
	data = JSON.parse(response)
	puts data[0]['url']
	puts data[0]['breeds'][0]['name']
	puts data[0]['breeds'][0]['description']
	Cat.create(
		image: data[0]['url'],
		breed: data[0]['breeds'][0]['name'],
		fact: data[0]['breeds'][0]['description']
	)
end