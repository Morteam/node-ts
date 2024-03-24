// https://pokeapi.co/api/v2/pokemon/1

const getPokemonById = (id, callback) => {
    const URL_REQUEST = `https://pokeapi.co/api/v2/pokemon/${id}`

    // Fetch is supported by Node 14 (aprox)
    fetch(URL_REQUEST)
        .then(response => {
            response.json().then( pokemon => {
                callback(pokemon)
            } )
        })
}

module.exports = {
    getPokemonById
}