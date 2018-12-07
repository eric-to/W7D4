json.array! @parties do |party2|
  json.partial! 'api/parties/party', party: party2
end