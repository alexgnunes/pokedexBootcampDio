function convertPokemonTypeToLi(pokemonTypes){
  return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemontoLI(pokemon) {
  return `
    <li class="pokemon">
                <span class="number">${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${convertPokemonTypeToLi(pokemon.types).join('')}
                    </ol>
                    <img src="${pokemon.sprites.front_default}"
                        alt="${pokemon.name}">
                </div>
            </li>
    `;
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons = []) =>{

  pokemonList.innerHTML = pokemons.map(convertPokemontoLI).join('');

});
