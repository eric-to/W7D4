import React from 'react';

class PokemonDetail extends React.Component {
  componentDidUpdate(prevProps) {
    // debugger
    let oldId = prevProps.match.params.pokemonId;
    let currId = this.props.match.params.pokemonId
    if (oldId !== currId) {
      this.props.requestPokemon(currId);
    }
  }

  componentDidMount() {
    this.props.requestPokemon(this.props.match.params.pokemonId);
  }

  render () {
    if (!this.props.pokemon) {
      return <div>ASH IS ALIVE</div>;
    } 
    return (
      <div class="pokemon-entry-page">
        <h1>{this.props.pokemon.name}</h1>
      </div>
    )
  }
}

export default PokemonDetail;