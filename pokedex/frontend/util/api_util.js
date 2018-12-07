export const fetchAllPokemon = () => {
  // AJAX REQUEST - returns a promise
  return (
    $.ajax({
      method: 'GET',
      url: 'api/pokemon'
    })
  )
};

export const fetchPokemon = (id) => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/pokemon/${id}`
    })
  )
};