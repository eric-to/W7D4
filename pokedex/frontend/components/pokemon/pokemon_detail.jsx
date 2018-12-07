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
        <div class="page">
          <img src={this.props.pokemon.image_url} alt=""/>
          <h1>{this.props.pokemon.name}</h1>
          <h1>{"#" + this.props.pokemon.id}</h1>
          <p>{"Type: " + this.props.pokemon.poke_type}</p>
          <p>{"Attack: " + this.props.pokemon.attack}</p>
          <p>{"Defense: " + this.props.pokemon.defense}</p>
          <p>{"Moves: " + this.props.pokemon.moves}</p>
        </div>

      </div>
    )
  }
}

export default PokemonDetail;