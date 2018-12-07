import React from 'react';
import {Link} from 'react-router-dom';

const PokemonIndexItem = ({ pokemon }) => {
  let spriteLink = `https://img.pokemondb.net/sprites/diamond-pearl/normal/${pokemon.name.toLowerCase()}.png`;
  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <div className="pokemon-entry">
        <img src={spriteLink} alt=""/>
        {/* <img src={pokemon.image_url} alt={pokemon.name}/> */}
        <div>{"#" + pokemon.id}</div>
        <div>{pokemon.name}</div>
      </div>
    </Link>
  )
};

export default PokemonIndexItem;