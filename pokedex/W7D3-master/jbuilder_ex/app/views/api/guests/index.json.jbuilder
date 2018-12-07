json.array! @guests do |guest2|
  // if guest2.age >= 40 && guest2.age <=50
  unless guest2.age < 40 || guest2.age > 50
    json.partial! 'api/guests/guest', guest: guest2
  end
end