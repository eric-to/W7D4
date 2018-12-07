import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import {Route} from 'react-router-dom';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokemon = this.props.pokemon;

    return (
      <div className="pokemon-entries-container">
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        {pokemon.map(mon => <PokemonIndexItem key={mon.id} pokemon={mon} />)}
      </div>
    );
  }
}

export default PokemonIndex;