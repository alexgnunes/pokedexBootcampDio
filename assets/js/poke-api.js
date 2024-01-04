const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    // const offset = 0;
    // const limit = 10;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    return fetch(url)
    .then((response) => response.json())
    .then((jasonBody) =>jasonBody.results)
    .catch((error) => console.error(error));
}

