const pokeApi = {}

function convertPokeApiToPokemon(pokemonDetail){
    const pokemon = new Pokemon();
    pokemon.number = pokemonDetail.order;
    pokemon.name = pokemonDetail.name;
    pokemon.types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name);
    pokemon.type = pokemon.types[0];
    pokemon.photo =  pokemonDetail.sprites.front_default;
    return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
  .then((response) => response.json())
  .then(convertPokeApiToPokemon);
};

pokeApi.getPokemons = (offset = 0, limit = 150) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

  return fetch(url)
    .then((response) => response.json())
    .then((jasonBody) => jasonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)
}

