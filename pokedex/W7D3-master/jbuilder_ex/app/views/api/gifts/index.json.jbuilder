json.array! @gifts do |gift2|
  json.partial! 'api/gifts/gift', gift: gift2
end