class Product < ApplicationRecord
  validates :name, :description, :price, presence: true
  normalizes :name, :description, with: ->(value) { value.downcase }
end
