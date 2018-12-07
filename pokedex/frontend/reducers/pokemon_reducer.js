import {RECEIVE_ALL_POKEMON} from '../actions/pokemon_actions';
import {RECEIVE_POKEMON} from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_POKEMON:
      return Object.assign({}, state, action.pokemon.pokemon);
    default:
      return state;
  }
};

export default pokemonReducer;