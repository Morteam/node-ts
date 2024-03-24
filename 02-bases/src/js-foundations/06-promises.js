const getPokemonById = (id) => {
    const URL_REQUEST = `https://pokeapi.co/api/v2/pokemon/${id}`

    // Fetch is supported by Node 14 (aprox)
    return fetch(URL_REQUEST)
        .then(response => response.json())
        .then(data => data.name )
}

module.exports = {
    getPokemonById
}