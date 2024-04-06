const getPokemonNameById = (id: number|string ): Promise<string> => {
    const URL_REQUEST: string = `https://pokeapi.co/api/v2/pokemon/${id}`

    // Fetch is supported by Node 14 (aprox)
    return fetch(URL_REQUEST)
        .then(response => response.json())
        .then(data => data.name )
}

export {
    getPokemonNameById
}