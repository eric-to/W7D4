export const fetchAllPokemon = () => {
  // AJAX REQUEST - returns a promise
  return (
    $.ajax({
      method: 'GET',
      url: 'api/pokemons'
    })
  )
};