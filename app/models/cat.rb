class Cat < ApplicationRecord
	validates :image, presence: true
	validates :breed, presence: true
	validates :fact, presence: true 
end
