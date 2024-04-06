// NO RECOMMENDED

interface GetPokemonByIdCallback {
    (pokemon: unknown): unknown
}

const getPokemonById = (id: number|string, callback:GetPokemonByIdCallback) => {
    const URL_REQUEST = `https://pokeapi.co/api/v2/pokemon/${id}`

    // Fetch is supported by Node 14 (aprox)
    fetch(URL_REQUEST)
        .then(response => {
            response.json().then( pokemon => {
                callback(pokemon)
            } )
        })
}

export {
    getPokemonById
}